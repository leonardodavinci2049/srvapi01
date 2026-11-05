export class DatabasePoolQueueFullError extends Error {
  constructor() {
    super('Serviço temporariamente indisponível. Tente novamente mais tarde.');
    this.name = 'DatabasePoolQueueFullError';
  }
}
