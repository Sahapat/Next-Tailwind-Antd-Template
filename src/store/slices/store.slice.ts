import { StateCreator } from "zustand";
import { IStoreState } from "../interface/store.interface";

export const StoreSlice: StateCreator<IStoreState> = (set, get) => ({
  example: ""
})
