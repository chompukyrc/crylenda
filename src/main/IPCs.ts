import { BrowserWindow, ipcMain } from "electron"
// import Constants from './utils/Constants'
// import db from './utils/db'
import { ICreateDiary } from "./interfaces/diary"
import diaryController from "./controllers/diary.controller"
import reasonController from "./controllers/reason.controller"

/*
 * IPC Communications
 * */
export default class IPCs {
    static initialize(window: BrowserWindow): void {
        ipcMain.on("msgRequestCreateDiary", async (event, diary: any) => {
            const CreateDiary = await diaryController.create(JSON.parse(diary))
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

        ipcMain.on("msgRequestListReason", async (event) => {
            const data = await reasonController.list()
            window.webContents.send("msgReceivedListReason", data)
        })

        ipcMain.on("msgRequestCreateReason", async (event, name: string) => {
            const data = await reasonController.create({ name })
            window.webContents.send("msgReceivedCreateReason", data)
        })
    }
}
