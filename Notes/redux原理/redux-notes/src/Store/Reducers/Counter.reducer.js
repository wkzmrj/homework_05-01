import { INCREMENT, DECREMENT, INCREMENT_N } from '../Action_types/counter.actions.types'

const initialState = {
    count: 6
}

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case INCREMENT_N:
            return {
                count: state.count + action.payload
            }
        default:
            return state
    }
}