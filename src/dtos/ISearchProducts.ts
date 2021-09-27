export interface IAddress {
  state_name: string
}

export interface IItem {
  permalink: string;
  thumbnail: string;
  price: number;
  address: IAddress;
}

export interface ISearchProducts {
  results: IItem[];
}
