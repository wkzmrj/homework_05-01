import React, { component } from 'react'
import * as todoActions from '../store/actions/todo.actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getIn } from 'immutable'

class Header extends component {

    addTodo = (ev) => {
        if (ev.keyCode === 13) {
            // 1. 获取输入内容
            let taskName = ev.target.value
            if (taskName.trim().length === 0) {
                alert('请输入任务名称')
                return
            }
            // 2. 触发新指令
            this.props.add_todo(taskName)
            // 3. 清空文本框
            ev.target.value = ''
        }
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input onKeyUp={this.addTodo} className="new-todo" placeholder="还有什么任务没有完成?" autofocus />
            </header>
        )
    }
}


// 组件与store 
const mapStateToProps = (state) => ({
    todos: getIn(state.todoReducer, ['todos'])
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(todoActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)