import create from "zustand";
import { IStoreState } from "./interface/store.interface";
import { StoreSlice } from "./slices/store.slice";

export const Store = create<IStoreState>((...args) => ({
  ...StoreSlice(...args),
}))
