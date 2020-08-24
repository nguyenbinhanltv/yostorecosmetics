export interface Product {
  productName: string,
  productId: string,
  productBarCode: string,
  productPrice: {
    productRetailPrice: string,
    productWholesalePrice: string,
    productStockPrice: string,
  },
  productClassification: {
    productType: string,
    productMark: string,
  },
  productWareHouse: {
    productWeight: string,
    productUnit: string,
  },
}
