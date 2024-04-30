import { questionsController } from "../../src/controllers";

describe("Teste questions integration", () => {
  it("Question one", async () => {
    const response = questionsController.one;
    expect(response).resolves.not.toThrow;
  });
  it("Question two", async () => {
    const response = questionsController.two;
    expect(response).resolves.not.toThrow;
  });
});
