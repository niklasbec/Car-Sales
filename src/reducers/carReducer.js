import { INCREMENT } from './action_types'

const initialCount = 0

export function countReducer (count = initialCount, action) {
    switch(action.types) {
        case INCREMENT:
            return count + 1
        default:
            return count
    }
}
