import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { LoginWrapper,Input, Button } from './styles'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    render() {
        const {loginState} =this.props
        console.log(loginState)
        if(!loginState){
            return <div>
            <LoginWrapper>
                <Input placeholder="用户名" ref={(input)=>{this.account=input}}></Input>
                <Input placeholder="密码" type="password" ref={(input)=>{this.password=input}}></Input>
                <Button onClick={()=>this.props.login(this.account,this.password)}>立即登录</Button>
            </LoginWrapper>
        </div>
        }else{
            return <Redirect to="/"></Redirect>
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


const mapDispath = (dispatch) => ({
    login(accountElement,passwordElement){
        axios.get('/api/login.json').then((res)=>{
            const result=res.data.data
            if(result.username===accountElement.value && result.password===passwordElement.value){
                const action={
                    type:'login_data',
                    login:true
                }
                dispatch(action)
            }
        })

    }
});

export default connect(mapState, mapDispath)(Login)