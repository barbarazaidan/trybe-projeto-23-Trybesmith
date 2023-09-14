export type Order = {
  id: number;
  userId: number;
  productIds?: ArrayIdsRetornadosDoBanco[];
};

export type OrderFormatada = {
  id: number;
  userId: number;
  productIds: number[];
};

export type ArrayIdsRetornadosDoBanco = {
  id: number;
};
