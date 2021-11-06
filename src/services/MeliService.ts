import axios from 'axios'
import qs from 'querystring'
import { errorHandler } from '@seasy/package'
import { ISearchProducts } from '../dtos'

export const MeliService = {
  async searchProducts (product: string): Promise<ISearchProducts> {
    const meliUrl = process.env.MELI_URL || ''

    try {
      const response = await axios.get<ISearchProducts>(
        `${meliUrl}/search?${qs.stringify({ q: product })}&limit=15`
      )

      return response.data
    } catch (e: any) {
      throw errorHandler.generate(3003, e)
    }
  }
}
