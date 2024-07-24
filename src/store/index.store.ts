import { create } from 'zustand'
import { IStoreState } from './interface/store.interface'
import { StoreSlice } from './slices/store.slice'
import { IExampleState } from '@/store/interface/example.interface'
import { ExampleSlice } from '@/store/slices/example.slice'

export const useStore = create<IStoreState & IExampleState>((...args) => ({
  ...ExampleSlice(...args),
  ...StoreSlice(...args),
}))
