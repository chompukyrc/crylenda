import { startOfDay, lastDayOfMonth, format } from 'date-fns'
import { IDiary, ICreateDiary, IUpdateDiary } from '../interfaces/diary'
import db from '../utils/db'

export default {
  create: async (CreateDiary: ICreateDiary): Promise<IDiary | null> => {
    try {
      const _diary = await db.diary.findOneAsync({
        date: { $gt: startOfDay(CreateDiary.date) }
      })

      if (!_diary) {
        const diary = await db.diary.insertAsync(CreateDiary)
        return diary as IDiary
      }
    } catch (error) {
      console.log(error)
    }

    return null
  },
  update: async () => {
    try {
      console.log('create')
    } catch (error) {
      console.log(error)
    }
  },
  delete: async () => {
    try {
      console.log('create')
    } catch (error) {
      console.log(error)
    }
  },
  get: async (date: Date): Promise<IDiary | null> => {
    try {
      const diary = await db.diary.findOneAsync({ date: { $gt: startOfDay(date) } })
      return diary as IDiary
    } catch (error) {
      console.log(error)
      return null
    }
  },
  list: async (): Promise<IDiary[] | []> => {
    try {
      const today = new Date()
      const firstDateOfMonth = new Date(format(today, 'yyyy-MM-01'))
      const lastDateOfMonth = new Date(format(lastDayOfMonth(today), 'yyyy-MM-dd'))
      // console.log(firstDateOfMonth, lastDateOfMonth)
      const diaries = await db.diary.find({
        date: { $gte: firstDateOfMonth, $lte: lastDateOfMonth }
      })

      return diaries as IDiary[]
    } catch (error) {
      console.log(error)
      return []
    }
  }
}
