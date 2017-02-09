import { fetchProducts } from '../endpoints/vendors';

export function* ProductSearch() {
  const products = yield fetchProducts();
  console.log(products);
};
