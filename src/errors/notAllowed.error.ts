import { ApolloError } from "apollo-server-core";

export class NotAllowedError extends ApolloError {
  constructor(message: string) {
    super(message, 'ACTION_NOT_ALLOWED');

    Object.defineProperty(this, 'name', { value: 'NotAllowedError' });
  }
}
