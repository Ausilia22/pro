import * as types from '../actionTypes';

export function LIKE_ACTION(id) {
    console.log(id)
    return {
        type: types.LIKE_TYPE,
        id: id
    };
}
export function UN_LIKE_ACTION(id) {
    return {
        type: types.UN_LIKE_TYPE,
        id: id
    };
}

