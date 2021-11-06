import { IProduct } from '../../dtos'
import { MeliService } from '../../services'
import { filterProductsByPrice, formatSearchProducts } from '../../helpers'
import { sortProductsByPrice, filterProductsByDetails } from '@seasy/package'

interface Payload {
  product: string;
}
export class SearchUsecase {
  async execute (queryStringParameters: Payload): Promise<IProduct[]> {
    const { product } = queryStringParameters

    const response = await MeliService.searchProducts(product)
    const formattedProducts = formatSearchProducts(response)
    const filteredProductsByDetails = filterProductsByDetails(formattedProducts, product)
    const filteredProductsByPrice = filterProductsByPrice(filteredProductsByDetails)
    const sortedProducts = sortProductsByPrice(filteredProductsByPrice)
    return sortedProducts
  }
}
