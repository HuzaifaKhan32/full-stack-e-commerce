import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressType'
import { blockContentType } from './blockContentType'
import { blogCategoryType } from './blogCategoryType'
import { blogType } from './blogType'
import { brandType } from './brandType'
import { orderType } from './orderType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    addressType,
    blockContentType,
    blogCategoryType,
    blogType,
    brandType,
    orderType,
    productType
  ],
}
