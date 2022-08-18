import { Server as SocketIO, Socket } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

class SocketServer {
  private port: number;
  private pubClient;
  private subClient;

  constructor(port: number, redisUri: string, redisPort: number) {
    this.port = port;
    this.pubClient = createClient({ url: `${redisUri}:${redisPort}` });
    this.subClient = this.pubClient.duplicate();
  }

  public createServer() {
    /**
     * Create socket server
     */
    const io = new SocketIO(this.port, {
      cors: {
        origin: '*',
      },
    });

    Promise.all([this.pubClient.connect(), this.subClient.connect()]).then(() => {
      io.adapter(createAdapter(this.pubClient, this.subClient));
      io.listen(3333);
    });

    io.on('connection', (socket: Socket) => {
      // Handle when client connect to socket server
      console.log('New client connected' + socket.id);

      // Handle event have name 'message' from client
      socket.on('message', async (data: string) => {
        // Emit event have name 'message' with data from server
        socket.broadcast.emit('message', data);

        await this.pubClient.set(`task`, JSON.stringify(data));
      });

      // Client disconnect
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

  public async getDataRedis(bucket: string) {
    // eslint-disable-next-line no-return-await
    return await this.pubClient.get(bucket);
  }
}

export default SocketServer;
