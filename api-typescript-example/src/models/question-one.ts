import { ConvertUndefinedToNull } from "./convert-undefined-null";

export class NuvidioSelectionProcessQuestions {
  private readonly convertUndefinedToNull: ConvertUndefinedToNullProtocol;
  private readonly input: UndefinedToNull;

  constructor(items: UndefinedToNull) {
    this.input = items;
    this.convertUndefinedToNull = new ConvertUndefinedToNull(this.input);
  }

  async create(): Promise<UndefinedToNull> {
    const response = await this.convertUndefinedToNull.send(this.input);
    return response;
  }
}
