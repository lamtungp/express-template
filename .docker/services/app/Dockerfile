FROM node:14 as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM node:14

WORKDIR /app

COPY package*.json ./

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/tsconfig.migrations.json ./
COPY --from=builder /app/.sequelizerc ./

RUN npm install -g sequelize
RUN npm install

EXPOSE 4000 

CMD ["npm", "start"]