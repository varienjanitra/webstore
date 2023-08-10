/*
  The future product model shall be extended to have more fields, such as:
  1. Product manufacturer
  2. Discount availability
  3. etc...
 */
export default interface Product {
  id: number,
  name: string,
  description?: string,
  price?: number,
}
