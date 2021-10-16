import { ProductsSearchMock } from '../mocks/ProductsSearch'
import { formatSearchProducts } from '../../src/helpers'

describe('formatSearchProducts', () => {
  it('should return formatted products', () => {
    const products = formatSearchProducts(ProductsSearchMock)
    expect(products[0].url.split('-').length).toEqual(10)

    const productKeys = Object.keys(products[0])
    expect(productKeys.length).toEqual(7)
    expect(productKeys.includes('url')).toEqual(true)
    expect(productKeys.includes('price')).toEqual(true)
    expect(productKeys.includes('location')).toEqual(true)
    expect(productKeys.includes('image')).toEqual(true)
    expect(productKeys.includes('marketplace')).toEqual(true)
    expect(productKeys.includes('title')).toEqual(true)
    expect(productKeys.includes('variations')).toEqual(true)
  })
})
