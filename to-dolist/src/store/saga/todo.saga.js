// from load-to-do, from middleware: finish async, new order to reducer to component
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { load_todo, load_todo_success, add_todo, add_todo_success, remove_todo, remove_todo_success, modify_todo, modify_todo_success, clear_todo_completed, clear_todo_completed_success, edit_todo, edit_todo_success, edit_todo_name, edit_todo_name_success } from '../actions/todo.actions'
// get data and fetch new instructions


function* load_todo_data() {
    let todoData = yield axios.get('/api/todos')
    console.log(todoData)
    yield put(load_todo_success(todoData))
}

// add_todo_data method
function* add_todo_data(action) {
    // async, and fetch instructions
    let taskInfo = yield axios.post('/api/todos', { taskName: action.payload })
    yield put(add_todo_success(taskInfo.task))
}

function* remove_todo_data(action) {
    let res = yield axios.delete('/api/todos', {
        params: {
            id: action.payload
        }
    })
    yield put(remove_todo_success(res.tasks.id))
}

function* modify_todo_data(action) {
    let params = action.payload
    let {task} = yield axios.put('/api/todos/isCompleted', params)
    yield put(modify_todo_success(task))
}

function* clear_todo_data(){
    yield axios.delete('/api/todos/clearCompleted')
    yield put(clear_todo_completed_success())
}

function* edit_todo_data(action){
    yield axios.put('/api/todos/isEditing', action.payload)
    yield put(edit_todo_success(action.payload))
}

function* edit_todo_name_data(action) {
    yield axios.put('/api/todos/', action.payload)
    yield put(edit_todo_name_success(action.payload))
}

export default function* todoSage() {
    yield takeEvery(load_todo, load_todo_data)
    yield takeEvery(add_todo, add_todo_data)
    yield takeEvery(remove_todo, remove_todo_data)
    yield takeEvery(modify_todo, modify_todo_data)
    yield takeEvery(clear_todo_completed, clear_todo_data)
    yield takeEvery(edit_todo, edit_todo_data)
    yield takeEvery(edit_todo_name, edit_todo_name_data)
}

