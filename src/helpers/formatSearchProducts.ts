import { IProduct, ISearchProducts, IVariations } from '../dtos'

export const formatSearchProducts = (response: ISearchProducts): IProduct[] => {
  const { results, available_filters } = response

  const filteredVariations = available_filters.filter(item => {
    return ['COLOR', 'MATERIAL', 'FLAVOR', 'SIZE'].some(word => item.id.toLocaleUpperCase().includes(word))
  })

  const variations = filteredVariations.map((item): IVariations => {
    const { name, values } = item
    return {
      name,
      options: values.map(item => {
        return item.name
      })
    }
  })

  const products = results.map(item => {
    const { permalink, thumbnail, price, address, title } = item

    return {
      marketplace: 'mercado livre',
      url: permalink,
      image: thumbnail,
      price,
      location: address.state_name,
      title,
      variations
    }
  })
  return products
}
