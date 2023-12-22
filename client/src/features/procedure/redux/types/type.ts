export type State = {
  procedures: Procedure[];
  error: undefined | string;
};

export type Procedure = {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  category:string;
};

export type IdProcedure = Procedure['id'];
export type CategoryFirstPage = Procedure['categoryId'];
