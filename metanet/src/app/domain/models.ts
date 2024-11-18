

export interface User {
  name?: string;
  image?: string;
}

export interface customer {
  id?: number;
  creator?:User;
  invoice?:number;
  customer?: User;
  amount?: number;
  status?: string;
}

export interface Admindetails {
  id?: number;
  user?: User;
  email?: string;
  contact?: string;
  status?: string;
}
export interface model {
  id?: number;
  name?: string;
  image?: string;
  category?: string;
  price?: number;
  reviews?: number;
}
export interface model2 {
  id?: number;
  user?: User;
  name?: string;
  image?: string;
  category?: string;
  price?: number;
  reviews?: number;
}


