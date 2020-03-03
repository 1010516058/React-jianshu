import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import * as actionCreate from './store/actionCreate'
import { Link } from 'react-router-dom'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js'
import { actionCreate as loginActionCreators } from '../../pages/login/store'
class Header extends Component {
    render() {
        const { login, logout } = this.props

        return <HeaderWrapper>
            <Logo href="/"></Logo>
            <Nav>

                <Link to="/">
                    <NavItem className="left active" >首页</NavItem>

                </Link>
                <NavItem className="left">下载APP</NavItem>
                {/* <NavItem className="right">注册</NavItem> */}
                {
                    login ? <NavItem className="right" onClick={logout}>退出</NavItem> :

                        <Link to="/login"> <NavItem className="right" >登录</NavItem></Link>

                }


                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>

                <SearchWrapper>
                    {/* 使用数据绑定动态的focus */}
                    <CSSTransition in={this.props.focused} timeout={250} classNames="slide">
                        <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>

                    <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe61c;</i>
                </SearchWrapper>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe6e5;</i>
                            &nbsp;
                            写文章
                    </Button>
                    </Link>

                    <Button className="reg">注册</Button>

                </Addition>
            </Nav>
        </HeaderWrapper>
    }
}
// 设置数据
const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused'),
        login: state.login.get('login')
    }
}
//绑定方法修改数据
const mapDispathToprops = (dispath) => {
    return {
        handleInputFocus() {

            dispath(actionCreate.searchFocus())

        },
        handleInputBlur() {

            dispath(actionCreate.searchBlur())
        },
        logout() {
            // console.log(loginActionCreators)
            dispath(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispathToprops)(Header)