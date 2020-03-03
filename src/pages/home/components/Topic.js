import React ,{Component} from 'react'
import { TopicWrapper, TopicItem } from '../styles'
import {connect} from 'react-redux'

class Topic extends Component{
    render(){
        return <div>
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return <TopicItem key={item.get('id')}>{item.get('title')}</TopicItem>
                    })
                }
                {/* <TopicItem>{this.props.name}-{this.props.topicList}</TopicItem> */}
               
            </TopicWrapper>
        </div>
    }
}

// 设置数据
const mapState=(state)=>{
    return {
        name:state.home.get('name'),
        list:state.home.get('topicList')
        // list:state.getIn(['home','topicList'])
    }
//    list:state.get('home').get('topicList')
}
// const mapStateToProps=(state)=>{

//     list:state.get('home').get('topicList')

// }
export default connect(mapState,null)(Topic);