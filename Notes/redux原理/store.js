import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Reducer/Counter.reducer';
const store = configureStore({
    reducer: {count: CounterReducer}
})

export default store;
// redux流程
// constructor() {
//     super()
//     this.myRef = React.createRef()
// }
// handler = () => {
//     获取DOM元素
//     const content = this.myRef.current.value
//     this.props.dispatch({type: 'addContent'}, content)
//     this.myRef.current.value=''
// }