import { IProduct } from '../../dtos'
import { MeliService } from '../../services'
import { filterProductsByPrice, formatSearchProducts } from '../../helpers'
import { sortProductsByPrice } from '@vmotta8/price-comparison'

interface Payload {
  product: string;
}
export class SearchUsecase {
  async execute (queryStringParameters: Payload): Promise<IProduct[]> {
    const { product } = queryStringParameters

    const { results } = await MeliService.searchProducts(product)
    const formattedProducts = formatSearchProducts(results)
    const filteredProducts = filterProductsByPrice(formattedProducts)
    const sortedProducts = sortProductsByPrice(filteredProducts)
    return sortedProducts
  }
}
