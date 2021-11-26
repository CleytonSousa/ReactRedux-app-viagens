import produce from "immer"

export const reserve = (state = [], action) => {

    switch(action.type){
        case 'ADD_RESERVE':
            return produce(state, draft => {
                const tripIdx = draft.findIndex(trip => trip.id === action.trip.id)

                if(tripIdx >= 0){
                    draft[tripIdx].amount += 1
                } else {
                    draft.push({
                        ...action.trip,
                        amount: 1
                    })
                }
            })
        
        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIdx = draft.findIndex(trip => trip.id === action.id)

                if(tripIdx >= 0){
                    draft.splice(tripIdx, 1)
                }
            })

        case 'UPDATE_RESERVE': {
            if(action.amount <= 0){
                return state
            }

            return produce(state, draft => {
                const tripIdx = draft.findIndex(trip => trip.id === action.id)

                if(tripIdx >= 0){
                    draft[tripIdx].amount = Number(action.amount)
                }
            })
        }
        default:
            return state
    }
}