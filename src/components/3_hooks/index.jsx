import React from 'react'
import {root} from '../../index'

/* class Demo extends React.Component {

    state = {count:0}

    myRef = React.createRef()

    add = () => {
      this.setState(state => ({count:state.count+1}))
    }

    unmount = () => { //卸载组件
      root.unmount();
    }

    show = () => {
      alert(this.myRef.current.value)
    }

    componentWillUnmount(){ //关闭定时器
      clearInterval(this.timer)
    }

    componentDidMount(){
      this.timer = setInterval(() => {
        this.setState(state => ({count:state.count+1}))
      },1000)
    }

  render() {
    return (
      <div>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
      <input type="text" ref={this.myRef}/>
        <button onClick={this.show}>点击提示数据</button>
      </div>
    )
  }
} */

function Demo(){

  const [count,setCount] = React.useState(0)
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count+1)
    },1000)
    return () => {
      clearInterval(timer)
    }
  },[])

  //加的回调
  function add(){
    // setCount(count+1) //第一种写法
    setCount(count => count+1)
  }

  //卸载组件的回调
  function unmount(){
    root.unmount();
  }

  //提示输入的回调
  function show(){
    alert(myRef.current.value)
  }

  return (
    <div>
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <input type="text" ref={myRef}/>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}

export default Demo