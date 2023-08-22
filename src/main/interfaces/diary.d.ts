export interface IDiary {
  _id: string
  date: Date
  happyScore: number
  isCry: boolean
  reason: string // ref to reason
  diary: string
  createdAt: Date
  updatedAt: Date
}

export interface ICreateDiary {
  date: Date
  happyScore: number
  isCry: boolean
  reason: string // ref to reason
  diary: string
}

export interface IUpdateDiary {
  date: Date
  happyScore: number
  isCry: boolean
  reason: string // ref to reason
  diary: string
}
