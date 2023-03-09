export interface IPurchaseItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  qty: number;
  pic: string;
}

export interface IMovie {
  id: string;
  name: string;
  desc: string;
  price: string;
  pic: string;
  duration: number;
  rating: number;
}

export interface IDescription {
  title: string;
  value: string | number;
}

export interface IComment {
  id: string;
  user: string;
  comment: string;
  time: string;
}
