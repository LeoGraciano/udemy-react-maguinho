export class ServerError extends Error {
  constructor() {
    super("Erro de processamento, comunique o administrador");
    this.name = "ServerError";
  }
}
