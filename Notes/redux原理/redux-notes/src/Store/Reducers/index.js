import { combineReducers } from 'redux'
import counterReducer from './Counter.reducer'
import personReducer from './Person.reducer'

export default combineReducers({
    counter: counterReducer,
    person: personReducer
})

// {counter: {count}, person[{}]}