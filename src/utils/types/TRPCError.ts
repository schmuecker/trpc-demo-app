export type TRPCErrorMessage = {
  code: string;
  exact: boolean;
  inclusive: boolean;
  maximum: number;
  message: string;
  path: string[];
  type: string;
};

export type TRPCErrorData = TRPCErrorMessage[];
