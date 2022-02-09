export interface Variables {
  name?: string;
}

export interface InteractionVars {
  [key: string]: any;
  cpf?: string;
  vars?: {
    idNumberControl?: string;
    [key: string]: any;
  };
}
