import { NuvidioSelectionProcessQuestions } from "../../src/models";

describe("Teste questions unit", () => {
  it("Question one", async () => {
    const input: ProcessProps = {
      name: "Test",
    };

    const questionsModel = new NuvidioSelectionProcessQuestions();
    const response = await questionsModel.one(input.name);
    expect(response).resolves.not.toThrow;
  });
  it("Question two", async () => {
    const input: ProcessProps = {
      name: "Test",
    };

    const questionsModel = new NuvidioSelectionProcessQuestions();
    const response = await questionsModel.two(input.name);
    expect(response).resolves.not.toThrow;
  });
});
