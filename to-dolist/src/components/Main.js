/* eslint-disable default-case */
import React, { component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../store/actions'
import {getIn} from 'immutable'
class Main extends component {
	componentDidMount() {
		this.props.load_todo()
	}
	removeTask(id) {
		if (window.confirm('确定删除当前任务')) {
			this.props.remove_todo(id)
		}
	}
	edit_name(id, ev) {
		this.props.edit_todo({id: id, isEditing: false})
		this.props.edit_todo_name({id:id, taskName: ev.target.value})
	}
	render() {
		return (
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
					{
						this.props.todos.map(item => {
							let classes = []
							if(item.isCompleted) classes.push('completed')
							if(item.isEditing) classes.push('editing')

							return (
							<li key={item.id} className={classes.join("")}>
								<div className="view">
									<input className="toggle" type="checkbox" defaultChecked={item.isCompleted} onChange={(e) => { this.props.modify_todo({ id: item.id, isCompleted: e.target.checked }) }} />
									<label onDoubleClick={() => {this.props.edit_todo({id: item.id, isEditing: true})}}>{item.taskName}</label>
									<button onClick={this.removeTask.bind(this, item.id)} className="destroy"></button>
								</div>
								<input className="edit" defaultValue={item.taskName} onBlur={this.edit_name.bind(this, item.id)} />
							</li>
						)})
					}
				</ul>
			</section>

		)
	}
}

// get data from store
const mapStateToProps = (state) => ({
	todos: filterToDos(getIn(state.todoReducer, ['todos']), getIn(state.todoReducer, ['todos']))
})


const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(todoActions, dispatch)
})

//filter new shown data
function filterToDos(todos, filter) {
	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(todo => !todo.isCompleted)
		case 'completed':
			return todos.filter(todo => !todo.isCompleted)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)