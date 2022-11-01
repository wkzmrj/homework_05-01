import React, { Component } from 'react'
import StudentTitle from './Components/StudentTitle'
import AddStudent from './Components/AddStudent'
import StudentList from './Components/StudentList'

class App extends Component {

  state = {
    studentList: [
      {
        "number": "01",
        "name": "张三",
        "sex": "男",
        "age": 10,
        "hobbies": ["足球", "篮球"],
        "subject": "大前端"
      }, {
        "number": "02",
        "name": "李四",
        "sex": "男",
        "age": 20,
        "hobbies": ["足球", "橄榄球"],
        "subject": "Java"
      }, {
        "number": "03",
        "name": "王五",
        "sex": "男",
        "age": 30,
        "hobbies": ["足球", "橄榄球", "篮球"],
        "subject": "python"
      }
    ]
  }

  addStudent = (student, callback) => {
    this.setState({
      studentList: [...this.state.studentList, student]
    }, () => {
      callback()
      console.log(this.state.studentList)
    })
  }
  removeStudent = (number) => {
    // 深拷贝，当前的number 与传进来的number是否一致
    const studentList = JSON.parse(JSON.stringify(this.state.studentList))
    const index = studentList.findIndex(student => student.number === number)
    studentList.splice(index, 1)
    // 数据同步,更新剩下的studentlist,回调函数看是否是删除后的结果
    this.setState({
      studentList: studentList
    }, () => {
      console.log(this.state.studentList)
    })
  }
  render() {
    return (
      <div className={'container'}>
        <StudentTitle />
        <AddStudent addStudent={this.addStudent} />
        <StudentList studentList={this.state.studentList} removeStudent={this.removeStudent} />
      </div>
    )
  }
}
export default App