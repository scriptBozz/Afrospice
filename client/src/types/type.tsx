// export type Likes = {
//   userid: string;
//   like: string;
//   date: string;
// };
export type Review = {
  id: string;
  comment: string;
  date:string;
};
export type Product = {
  _id: string;
  title: string;
  category: string;
  price: string;
  likes: number;
  review: Review[];
  vendor: string;
  image: string;
  description: string;
};

export type Prop = {
  product: Product;
};


export type User = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  category: string;
  email: string;
  image: string;
}
