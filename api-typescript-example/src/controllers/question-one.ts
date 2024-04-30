import { FastifyRequest, FastifyReply } from "fastify";
import { NuvidioSelectionProcessQuestions } from "../models";

export const questionsOneController = {
  async UndefinedToNull(request: FastifyRequest, reply: FastifyReply) {
    let requestData = request.body as UndefinedToNull | UndefinedToNull[];

    if (!Array.isArray(requestData)) {
      requestData = [requestData];
    }

    try {
      const responses = await Promise.all(
        requestData.map(async (data) => {
          const filledData: UndefinedToNull = {
            name: data.name || "",
            cell_phone: data.cell_phone || "",
            phone: data.phone || undefined,
            phone_message: data.phone_message || undefined,
            adress_one: data.adress_one || "",
            adress_two: data.adress_two || undefined,
          };

          const questionsModel = new NuvidioSelectionProcessQuestions(
            filledData
          );
          return await questionsModel.create();
        })
      );

      return reply.status(201).send(responses);
    } catch (error) {
      return reply.status(404).send({ message: "Houve algum erro", error });
    }
  },
};
