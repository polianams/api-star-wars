export class ApiError extends Error {
  public readonly statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(404, message);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(401, message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(400, message);
  }
}

export class ConflictError extends ApiError {
  constructor(message: string) {
    super(409, message);
  }
}
