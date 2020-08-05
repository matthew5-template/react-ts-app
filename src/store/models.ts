import { Models } from '@rematch/core'
import { count } from './count'

export interface RootModel extends Models {
  count: typeof count
}

export const models: RootModel = { count }
