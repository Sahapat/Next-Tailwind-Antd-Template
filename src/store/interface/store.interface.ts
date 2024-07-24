export type NotificationLevel = 'success' | 'error' | 'info' | 'warning'
export type OpenSideNotificationFunc = (header: string, message: string, type?: NotificationLevel) => void
export type OpenToastFunc = (message: string, type?: NotificationLevel) => void
export interface IStoreState {
  openSideNotification: OpenSideNotificationFunc
  openToast: OpenToastFunc

  _openSideNotificationCallback?: OpenSideNotificationFunc
  _openToastCallback?: OpenToastFunc
  _setOpenSideNotificationCallback: (cb: OpenSideNotificationFunc) => void
  _setOpenToastCallback: (cb: OpenToastFunc) => void
}
