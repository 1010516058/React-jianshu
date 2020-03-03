import React, { Component } from 'react'
import { HomeRight, HomeLeft, HomeWrapper } from './styles'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import axios from 'axios'

import { actionCreater } from './store'

class Home extends Component {
    render() {
        return <div>
            <HomeWrapper>
                <HomeLeft>
                    {/* <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img> */}
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />

                </HomeRight>
            </HomeWrapper>
        </div>
    }
    // 当组件挂载完毕
    componentDidMount() {
        this.props.changeHomeData()
    }


}
const mapDispath = (dispatch) => ({
    changeHomeData() {
        axios.get('/api/api.json').then((res) => {
            const result = res.data.data
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                artList: result.artList,
                recommends: result.recommends,
                name: result.name,
            }
            dispatch(action)
        })
        // console.log(action)
       
        // const action =actionCreater.testHomeInfo()
        // dispatch(action)
        // console.log(  action )
    }
});
export default connect(null, mapDispath)(Home)