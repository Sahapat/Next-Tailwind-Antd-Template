import { create } from 'zustand'
import { IStoreState } from './interface/store.interface'
import { StoreSlice } from './slices/store.slice'

export const useStore = create<IStoreState>((...args) => ({
  ...StoreSlice(...args),
}))
