import { INCREMENT } from './action_types'


export function increment() {
    console.log('hi');
    return {
        type: INCREMENT
    }
}