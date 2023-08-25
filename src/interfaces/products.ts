export interface T_Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface T_Filters {
  price: {
    min: number;
    max: number;
  };
  rating: {
    min: number;
    max: number;
  };
}
