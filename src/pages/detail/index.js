import React ,{Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {withRouter} from 'react-router'

class Detail extends Component{
    render(){
        return <div>
            <div>
            {this.props.match.params.id}
            detail~
            
                <h1>{this.props.artDetail.get('title')}</h1>
                <div>
                {this.props.artDetail.get('content')}

                </div>
                 
            </div>
            

            </div>
    }
    componentDidMount(){
        this.props.changeDetailData()
    }
}

const mapState = (state) => {
    return {
        artDetail: state.detail.get('artDetail')
    }
}
const mapDispath = (dispatch) => ({
    changeDetailData() {
        axios.get('/api/detail.json').then((res) => {
            const result = res.data.data
            const action = {
                type: 'detail_data',
                artDetail: result.artDetail,
            }
            dispatch(action)
        })
       
    }
});
export default connect(mapState, mapDispath)( withRouter(Detail) )
