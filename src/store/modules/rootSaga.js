import { all } from "@redux-saga/core/effects";
import reserve from "./reserve/sagas";

export function* rootSaga(){
    return yield all([
        reserve,
    ])
}