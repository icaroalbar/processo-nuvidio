import fastify, { FastifyInstance } from "fastify";
import routes from "./routers/routes";

const app: FastifyInstance = fastify({ logger: true });

const server = async () => {
  app.register(routes);

  const port: number = 3000;
  const host: string = "localhost" as const;

  const serverOptions: ServerOptions = {
    port: port,
    host: host,
  };

  try {
    await app.listen(serverOptions);
    app.log.info(`Server running on http://localhost:${serverOptions.port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

server();
