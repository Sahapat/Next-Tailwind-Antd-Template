import { IExampleState } from "@/store/interface/example.interface"
import { StateCreator } from "zustand"

export const ExampleSlice: StateCreator<IExampleState> = ((set, get) => ({
  counter: 0,
  setCounter (counter) {
    set({ counter })
  }
}))