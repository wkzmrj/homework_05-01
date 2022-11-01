import { handleAction as createReducer } from 'redux-actions'
import { load_todo_success, add_todo_success, remove_todo_success, modify_todo_success, modify_todo_filter, clear_todo_completed_success, edit_todo_success, edit_todo_name_success } from '../actions/todo.actions'
import { fromJS, setIn, mergeDeep, removeIn, getIn, updateIn } from 'immutable'

const initialState = fromJS({
    todos: [],
    filter: 'all'
})

const load_todo_action = (state, action) => {
    // 1para操作的数据 2para数据属性 3para属性值的设置
    return setIn(state, ['todos'], action.payload)
}
const add_todo_action = (state, action) => {
    //mergeDeep data 2para: attribute
    return mergeDeep(state, { todos: [action.payload] })
}

const remove_todo_action = (state, action) => {
    let index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload)
    return removeIn(state, ['todos', index])
}
const modify_todo_action = (state, action) => {
    let index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
    return updateIn(state, ['todos', index], () => action.payload)
}
const filter_todo_action = (state, action) => {
    return setIn(state, ['filter'], action.payload)
}

const clear_todo_action = (state, action) => {
    let todos = getIn(state, ['todos']).filter(todo => !todo.isCompleted)
    return setIn(state, ['todos'], todos)
}
const edit_todo_action = (state, action) => {
    let todos = JSON.parse(JSON.stringify(state.todos))
    let index = state.todos.findIndex(todo => todo.id === action.payload.id)
    todos[index].isEditing = action.payload.isEditing
    return {
        ...state,
        todos
    }
}
const confirm_todo_action = (state, action) => {
    let todos = JSON.parse(JSON.stringify(state.todos))
    let index = state.todos.findIndex(todo => todo.id === action.payload.id)
    todos[index].taskName = action.payload.taskName
    return {
        ...state,
        todos
    }
}
export default createReducer({
    [load_todo_success]: load_todo_action,
    [add_todo_success]: add_todo_action,
    [remove_todo_success]: remove_todo_action,
    [modify_todo_success]: modify_todo_action,
    [modify_todo_filter]: filter_todo_action,
    [clear_todo_completed_success]: clear_todo_action,
    [edit_todo_success]: edit_todo_action,
    [edit_todo_name_success]: confirm_todo_action
}, initialState)
