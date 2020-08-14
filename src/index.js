import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Life from "./pages/demo/Life";
import * as serviceWorker from "./serviceWorker";

// eslint-disable-next-line no-lone-blocks
{//React生命周期
  /* getDefaultProps
   通过这个方法初始化props属性，这个props来着于父组件、其它组件传递过来
 */
  /*getInitialState
  初始化当前组件的状态
*/
  /* componentWillMount
  组将即将挂载，执行render组件之前执行
 */
  /* render
  执行视图渲染，主要逻辑
 */
  /* componentDidMount
  组将Dom插入完成，调用
 */
  /* componentWillReceiveProps
  父组件属性传递会调用的方法
 */
  /* shouldComponentUpdate
  组件的更新，调用this.setState方法就会调用这个方法更新组件
 */
  /* componentWillUpdate
  组件更新之前执行的方法
 */
  /* componentDidUpdate
  组件更新之后执行的方法
 */
  /* componentWillUnmount
  组件销户执行的方法
 */
  /*
   render方法是必须要有的；
   
  */
}

// eslint-disable-next-line no-lone-blocks
{//一般项目除了脚手架需要安装的插件
  /**
   * 安装路由：React-Router、Axios（Http2.2）--必须
   * UI框架：AntD
   * 暴露webpack配置文件
   * 安装less-loader（支持.less文件）
   * 修改less-loader
   * 
   * 插件安装脚本：
   * 安装react-router：yarn add react-router-dom axios less-loader
   * 
   * 
   * */
}


ReactDOM.render(
  <React.StrictMode>
    <Life />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
