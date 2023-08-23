import { BrowserWindow, ipcMain } from "electron"
// import Constants from './utils/Constants'
// import db from './utils/db'
import { ICreateDiary } from "./interfaces/diary"
import diaryController from "./controllers/diary.controller"

/*
 * IPC Communications
 * */
export default class IPCs {
    static initialize(window: BrowserWindow): void {
        ipcMain.on("msgRequestCreateDiary", async (event, diary: ICreateDiary) => {
            const CreateDiary = await diaryController.create(diary)
            window.webContents.send("msgReceivedCreateDiary", CreateDiary)
        })

        ipcMain.on("msgRequestListDiary", async (event) => {
            const diaries = await diaryController.list()
            window.webContents.send("msgReceivedListDiary", diaries)
        })

        ipcMain.on("msgRequestGetDiary", async (event, date: Date) => {
            const diaries = await diaryController.get(date)
            window.webContents.send("msgReceivedGetDiary", diaries)
        })
    }
}
