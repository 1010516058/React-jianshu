import React, { Component } from 'react'
import { ListItem } from '../styles'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
class List extends Component {
    render() {
        return <div>
            {
                this.props.artList.map((item,index) => {
                    return <Link key={index} to={'/detail/'+item.get('id')}>
                            <ListItem key={item.get('id')}>
                            <h1>{item.get('title')}</h1>
                            <div>{item.get('content')}</div>
                        </ListItem>
                    </Link>
                    
                })
            }
        </div>
    }
}
const mapState = (state) => {
    return {
        artList: state.home.get('artList')
    }
}
export default connect(mapState, null)(List);
