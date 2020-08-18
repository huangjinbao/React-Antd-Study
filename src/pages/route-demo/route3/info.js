import React from 'react';

export default class Info extends React.Component{

    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                这里是测试动态加载路由
                {this.props.match.params.value}
            </div>
        )
    }
}