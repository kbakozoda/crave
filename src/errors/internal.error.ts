import { ApolloError } from "apollo-server-core";

export class InternalError extends ApolloError {
  constructor(message: string) {
    super(message, 'INTERNAL_ERROR');

    Object.defineProperty(this, 'name', { value: 'InternalError' });
  }
}
