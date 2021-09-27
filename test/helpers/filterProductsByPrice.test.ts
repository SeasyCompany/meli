import { ProductsSearchMock } from '../mocks/ProductsSearch'
import { formatSearchProducts, filterProductsByPrice } from '../../src/helpers'

describe('filterProductsByPrice', () => {
  it('should return filtered products', () => {
    const formattedProducts = formatSearchProducts(ProductsSearchMock.results)
    const filteredProducts = filterProductsByPrice(formattedProducts)
    expect(filteredProducts.length).toEqual(10)
  })
})
