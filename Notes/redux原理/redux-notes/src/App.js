import React, { Component } from "react"
import Counter from './Components/Counter'
// 1. Redux是啥,数据管理框架，store数据存储对象库，
import Person from './Components/Person'
class App extends Component {
  render() {
    return (
      <div>
      <Counter />
      <Person /> 
      </div>
    )
}
}

export default App