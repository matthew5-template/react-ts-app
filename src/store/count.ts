import { createModel } from '@rematch/core'
import { Dispatch, RootState } from './index'

type CountState = number

const delay = async (second: number) => {
  return new Promise((resolve) => setTimeout(resolve, 1000 * second))
}

export const count = createModel<CountState>()({
  state: 0,
  reducers: {
    increment(state, payload: number) {
      return state + payload
    }
  },
  effects: (d) => ({
    async incrementAsync(payload: number, r) {
      const dispatch = d as Dispatch
      const rootState = r as RootState
      console.log('previous rootState', rootState)
      await delay(1)
      await dispatch.count.increment(payload)
      console.log('after increment')
    },
    async incrementAsync2(payload: number, r) {
      const dispatch = d as Dispatch
      const rootState = r as RootState

      console.log(Date.now())
      await dispatch.count.incrementAsync(payload)
      await dispatch.count.incrementAsync(payload)
      console.log(Date.now())
    }
  })
})
