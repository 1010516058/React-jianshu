import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends Component {
    render() {
        const {loginState}=this.props
        if(loginState){
            return <div>写文章</div>
        }else{
            return <Redirect to="/login"></Redirect>
        }
        
    }
    // 当组件挂载完毕
    componentDidMount() {
    }


}
const mapState=(state)=>{
    return {
        loginState: state.login.get('login')
    }
}

export default connect(mapState, null)(Write)