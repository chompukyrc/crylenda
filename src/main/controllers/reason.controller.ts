import { startOfDay, lastDayOfMonth, format } from "date-fns"
import { ICreateReason, IReason } from "../interfaces"
import db from "../utils/db"

export default {
    create: async (createReason: ICreateReason): Promise<IReason | null> => {
        try {
            const oldData = await db.reason.findOneAsync({
                name: createReason.name
            })

            if (!oldData) {
                const data = await db.reason.insertAsync(createReason)
                return data as IReason
            }
        } catch (error) {
            console.log(error)
        }

        return null
    },
    list: async (): Promise<IReason[] | []> => {
        try {
            const data = await db.reason.find({})

            return data as IReason[]
        } catch (error) {
            console.log(error)
            return []
        }
    }
}
