export const addReserveRequest = (id) => {
    return {
        type: "ADD_RESERVE_REQUEST",
        id
    }
}
export const addReserveSuccess = (trip) => {
    return {
        type: "ADD_RESERVE_SUCCESS",
        trip
    }
}

export const removeReserve = (id) => {
    return{
        type: "REMOVE_RESERVE",
        id
    }
}

export const updateAmountRequest= (id, amount) => {
    return{
        type: "UPDATE_RESERVE_REQUEST",
        id,
        amount
    }
}
export const updateAmountSuccess = (id, amount) => {
    return{
        type: "UPDATE_RESERVE_SUCCESS",
        id,
        amount
    }
}