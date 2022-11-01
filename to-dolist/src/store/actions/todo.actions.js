import { createAction } from 'redux-actions'

//1. 发送请求获取数据
export const load_todo = createAction('load_todo')
// 2. 异步操作完成触发新指令
export const load_todo_success = createAction('load_todo_success')
// 3 add new data
export const add_todo = createAction('add_todo')
export const add_todo_success = createAction('add_todo_success')
// 4.delete
export const remove_todo = createAction('remove_todo')
export const remove_todo_success = createAction('remove_todo_success')
// 5. update
export const modify_todo = createAction('modify_todo')
export const modify_todo_success = createAction('modify_todo_success')
// 6. flilter
export const modify_todo_filter = createAction('modify_todo_filter')
// 7. delete all
export const clear_todo_completed = createAction('clear_todo_completed')
export const clear_todo_completed_success = createAction('clear_todo_completed_success')
// 8. edit tasks name
export const edit_todo = createAction('edit_todo')
export const edit_todo_success = createAction('edit_todo_success')
// 9. task name confirm 
export const edit_todo_name = createAction('edit_todo_name')
export const edit_todo_name_success = createAction('edit_todo_name_success')
