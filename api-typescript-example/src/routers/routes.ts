import { FastifyInstance } from "fastify";
import { questionsOneController } from "../controllers";

export default async function nuvidioSelectionProcess(
  fastify: FastifyInstance
) {
  fastify.post("/undefined-to-null", questionsOneController.UndefinedToNull);
}
