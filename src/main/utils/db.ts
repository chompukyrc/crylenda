import { app } from "electron"
import Datastore from "@seald-io/nedb"

const dbFactory = (fileName: string) =>
    new Datastore({
        filename: `${process.env.NODE_ENV === "dev" ? "." : app.getAppPath()}/data/${fileName}`,
        timestampData: true,
        autoload: true
    })

const db = {
    diary: dbFactory("diary.db"),
    reason: dbFactory("reason.db")
}

export default db
