import axios from 'axios'
import { ProductsSearchMock } from '../mocks/ProductsSearch'
import { MeliService } from '../../src/services'

axios.get = jest.fn((): any => { return { data: ProductsSearchMock } })

describe('shopee service', () => {
  describe('search products', () => {
    it('should return shopee products', async () => {
      const data = await MeliService.searchProducts('product name')
      expect(data).toBe(ProductsSearchMock)
    })
  })
})
