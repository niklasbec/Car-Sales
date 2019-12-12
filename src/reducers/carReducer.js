import { INCREMENT } from './action_types'

const initialCount = 3

export function countReducer (count = initialCount, action) {
    switch(action.type) {
        case INCREMENT:
            return count + 1;
        default:
            return count;
    }
}
