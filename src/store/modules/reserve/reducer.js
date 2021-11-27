import produce from "immer"

export const reserve = (state = [], action) => {

    switch (action.type) {
        case 'ADD_RESERVE_SUCCESS':
            return produce(state, draft => {
                draft.push(action.trip)
            })

        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIdx = draft.findIndex(trip => trip.id === action.id)

                if (tripIdx >= 0) {
                    draft.splice(tripIdx, 1)
                }
            })

        case 'UPDATE_RESERVE_SUCCESS': {
            return produce(state, draft => {
                const tripIdx = draft.findIndex(trip => trip.id === action.id)

                if (tripIdx >= 0) {
                    draft[tripIdx].amount = Number(action.amount)
                }
            })
        }
        default:
            return state
    }
}