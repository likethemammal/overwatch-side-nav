import * as types from '../constants/actions'

export const changeAction = (on) => {
    return {
        type: types.CHANGE_ACTION,
        on
    }
}
