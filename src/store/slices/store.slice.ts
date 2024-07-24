import { StateCreator } from "zustand"
import { IStoreState } from "../interface/store.interface"

export const StoreSlice: StateCreator<IStoreState> = (set, get) => ({
  _openSideNotificationCallback: undefined,
  _openToastCallback: undefined,

  _setOpenSideNotificationCallback(cb) {
    set({ _openSideNotificationCallback: cb })
  },
  _setOpenToastCallback(cb) {
    set({ _openToastCallback: cb })
  },

  openSideNotification (header, message, type) {
    get()._openSideNotificationCallback?.(header, message, type)
  },
  openToast (message, type) {
    get()._openToastCallback?.(message, type)
  }
})
