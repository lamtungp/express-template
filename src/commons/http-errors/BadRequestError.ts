import httpStatus from 'http-status';
import HttpError from './HttpError';
import messages from '../messages';

export default class BadRequestError extends HttpError {
  constructor(message = messages.httpMessage[400]) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
    this.name = this.constructor.name;
    this.statusCode = httpStatus.BAD_REQUEST;
  }
}
