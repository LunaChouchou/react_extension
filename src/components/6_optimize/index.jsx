import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

	state = {carName:"奔驰c36",stus:['小张','小李','小王']}

	addStu = ()=>{
		/* const {stus} = this.state
		stus.unshift('小刘')
		this.setState({stus}) */

		const {stus} = this.state
		this.setState({stus:['小刘',...stus]})
	}

  changeCar = () => {
      this.setState({carName:'迈巴赫'}) //建立了一个新对象

      // const obj = this.state //引用地址的传递
      // obj.carName= '迈巴赫' //obj是state原对象
      // console.log(obj === this.state); //会返回true
      // this.setState(obj) //地址没变，react认为state没变，阀门关闭
  }

/*     shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState); //接下来要变化的目标props，目标state
        console.log(this.props,this.state); //目前的props和state
        return !this.state.carName === nextState.carname
    } */

  render() {
    console.log('render---parent')
    const {carName} = this.state
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {this.state.stus}&nbsp;
        <span>我的车名字是：{carName}</span><br/>
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>添加一个小刘</button>
        <Child carName={carName}/>
      </div>
    )
  }
}


class Child extends PureComponent {

/*   shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState); //接下来要变化的目标props，目标state
    console.log(this.props,this.state); //目前的props和state
    return this.props.carName === nextProps.carname
  } */

    render() {
        console.log('render---child')
      return (
        <div className="child">
            <h3>我是Child组件</h3>
            <span>我接到的车是：{this.props.carName}</span>
        </div>
      )
    }
  }