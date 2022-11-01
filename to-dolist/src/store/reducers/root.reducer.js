// 合并reducer，使用combine方法

import { combineReducers } from 'redux'
import todoReducer from './todo.reducer' 

export default combineReducers({
    todoReducer: todoReducer
})