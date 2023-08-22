import { BrowserWindow, ipcMain, shell } from 'electron'
import Constants from './utils/Constants'
import db from './utils/db'

/*
 * IPC Communications
 * */
export default class IPCs {
  static initialize(window: BrowserWindow): void {
    // Get application version
    ipcMain.on('msgRequestGetVersion', async (event, props: { test: string }) => {
      console.log(props.test)
      await db.diary.insertAsync({ test: 'ja' })
      window.webContents.send('msgReceivedVersion', Constants.APP_VERSION)
    })

    // Open url via web browser
    ipcMain.on('msgOpenExternalLink', async (event, url: string) => {
      await shell.openExternal(url)
    })
  }
}
