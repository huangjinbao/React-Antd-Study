import React from "react";
import Child from "./Child";
import './index.less';

export default class Life extends React.Component {
  //等价下面的
  //   constructor(prop) {
  //     super(prop);
  //     this.state = {
  //       count: 0,
  //     };
  //   }

  state = {
    count: 0,
  };

  //需要 =()=> 来绑定当前this
  handleAdd = () => {
    this.setState({
      //setState相当于调用willUpdate，调用之后自动调用render
      count: this.state.count + 1,
    });
  };

  //这种方法需要在调用后面加.bind()
  handleClick() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  foo() {
    return () => {
      return () => {
        return () => {
          console.log('id:', this.id);
        };
      };
    };
  }

  render() {
    //return <div style={{padding:50}}> 等价于下面
    let style = {
      padding: 50,
    };
    let f = this.foo.call({id: 1});
    console.log(f);
    return (
      <div className="content">
        <p>React 生命周期介绍</p>
        <button onClick={this.handleAdd}>点击一下</button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    );
  }
}
