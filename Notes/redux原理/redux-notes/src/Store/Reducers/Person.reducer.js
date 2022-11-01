import { ADDPERSON } from '../Action_types/person.actions.types'

const initialState = [
    {
        id: 1, 
        name: 'zoe'
    }
]

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch (action.type) {
        case ADDPERSON:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}