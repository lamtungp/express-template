import httpStatus from 'http-status';
import HttpError from './HttpError';
import messages from '../messages';

export default class EntityNotFoundError extends HttpError {
  constructor(message = messages.httpMessage[404]) {
    super(message);

    Object.setPrototypeOf(this, EntityNotFoundError.prototype);
    this.name = this.constructor.name;
    this.statusCode = httpStatus.NOT_FOUND;
  }
}
