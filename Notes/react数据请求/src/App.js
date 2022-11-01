import React, { Component } from "react"
import axios from 'axios'

// 1. 请求转发,跨域的问题无法接收到接口的数据；
// 2. 如何实现请求转发： 方案1proxy配置
// 服务器与服务端不存在跨域问题，客户端应用发请求给同源的服务端，服务端
// 发给API服务端，将数据处理之后返回应用


class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }
  getArticle = async () => {
    let articles = await axios.get('api/article.json').then(response => response.data)
    this.setState({ articles }, () => {
      console.log(this.state.articles)
    })
  }
  render() {
    return (
      <div> 
        {/* 当前数据{this.state.msg} */}
        <button onClick={this.getArticle}>获取</button>
        <ul>
          {
          this.state.articles.map(article => (
            <li key={article.id}>{article.title}</li>
          ))
        }
        </ul>
        
      </div>
    )
  }
  // 完成渲染之后ajax发送请求数据
  // async componentDidMount() {
  //   const data = await axios
  //   .get("/api/welcome")
  //   .then(res => res.data)

  //     this.setState(data)
  // }
}

export default App

