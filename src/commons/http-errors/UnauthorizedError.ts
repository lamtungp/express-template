import httpStatus from 'http-status';
import HttpError from './HttpError';
import messages from '../messages';

export default class UnauthorizedError extends HttpError {
  constructor(message = messages.httpMessage[401]) {
    super(message);

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
    this.name = this.constructor.name;
    this.statusCode = httpStatus.UNAUTHORIZED;
  }
}
