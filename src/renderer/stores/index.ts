import { Store, StoreOptions, createStore } from "vuex"

interface IDiary {
    happyScore: number
    isCry: boolean | null
    reason: Array<string> // ref to reason
    diary: string
}

interface IRootState {
    diary: IDiary
}

const store: StoreOptions<IRootState> = {
    state: {
        diary: { happyScore: 0, isCry: null, reason: [], diary: "" }
    },
    getters: {
        getDiary: (state) => state.diary
    },
    mutations: {
        setDiary: (state, data: IDiary) => (state.diary = data)
    },
    actions: {}
}

export default new Store<IRootState>(store)
