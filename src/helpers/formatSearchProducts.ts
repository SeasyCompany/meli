import { IProduct, IItem } from '../dtos'

export const formatSearchProducts = (items: IItem[]): IProduct[] => {
  const products = items.map(item => {
    const { permalink, thumbnail, price, address } = item

    return {
      marketplace: 'mercado livre',
      url: permalink,
      image: thumbnail,
      price,
      location: address.state_name
    }
  })
  return products
}
