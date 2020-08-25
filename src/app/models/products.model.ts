import { ProductStatus } from './productStatus';

export interface Product {
  productName: string,
  productId: string,
  productBarCode: string,
  productRetailPrice: string,
  productWholesalePrice: string,
  productStockPrice: string,
  productType: string,
  productMark: string,
  productWeight: string,
  productUnit: string,
  productTimeCreated?: string,
  productAmount?: number,
  productOrigin: string,
  productStatus?: ProductStatus
}
