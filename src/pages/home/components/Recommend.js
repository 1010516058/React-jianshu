import React ,{Component} from 'react'
import { RecommendWrapper, RecommendItem } from '../styles'
import {connect} from 'react-redux'
class Recommend extends Component{
    render(){
        return <div>
            <RecommendWrapper>
                {
                    this.props.imgUrls.map((item)=>{
                
                return <RecommendItem  key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                    })
                }
            </RecommendWrapper>
        </div>
    }
}
const mapState = (state) => {
    return {
        imgUrls: state.home.get('recommends')
    }
}
export default connect(mapState, null)(Recommend);
