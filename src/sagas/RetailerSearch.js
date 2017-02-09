import { fetchRetailers } from '../endpoints/retailers';

export function* RetailerSearch() {
  const retailers = yield fetchRetailers();
  console.log(retailers);
};
