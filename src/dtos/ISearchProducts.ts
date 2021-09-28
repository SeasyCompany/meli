export interface IAddress {
  state_name: string
}

export interface IValues {
  name: string;
}
export interface IAvailableFilters {
  id: string;
  name: string;
  values: IValues[];
}

export interface IItem {
  title: string;
  permalink: string;
  thumbnail: string;
  price: number;
  address: IAddress;
}

export interface ISearchProducts {
  results: IItem[];
  available_filters: IAvailableFilters[];
}
