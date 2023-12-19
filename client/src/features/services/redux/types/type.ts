export type State = {
  procedures: Procedure[];
  error: undefined | string;
};

export type Procedure = {
  id: number;
  name: string;
  description: string;
  categoryId: number;
};

export type IdProcedure = Procedure['id'];
