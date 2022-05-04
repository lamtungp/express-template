export default class HttpError extends Error {
  public messageKey: string;
  public statusCode: number;

  constructor(message: string) {
    super();

    Object.setPrototypeOf(this, HttpError.prototype);
    this.name = this.constructor.name;
    this.message = message || 'Something went wrong. Please try again.';
  }
}
