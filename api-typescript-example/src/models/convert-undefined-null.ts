export class ConvertUndefinedToNull {
  private readonly input: UndefinedToNull;

  constructor(items: UndefinedToNull) {
    this.input = items;
  }

  async send(): Promise<UndefinedToNull> {
    const convertedObject: any = {};
    for (const key in this.input) {
      if (Object.prototype.hasOwnProperty.call(this.input, key)) {
        const value = this.input[key];
        convertedObject[key] = value !== undefined ? value : null;
      }
    }
    return convertedObject;
  }
}
