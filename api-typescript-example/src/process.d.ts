declare type ServerOptions = {
  port: number;
  host: string;
};

declare type ProcessProps = {
  name: string;
};

declare type UndefinedToNull = {
  name: string;
  cell_phone: string;
  phone?: string | undefined;
  phone_message?: string | undefined;
  adress_one: string;
  adress_two?: string | undefined;
  [key: string]: string | undefined;
};

declare type NuvidioSelectionProcessQuestionsProtocol = {
  undefinedToNull(data: UndefinedToNull): Promise<UndefinedToNull>;
};

declare type ConvertUndefinedToNullProtocol = {
  send(data: UndefinedToNull): Promise<UndefinedToNull>;
};
