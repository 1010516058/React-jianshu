import axios from 'axios'

const changeHomeData = (result) => ({
    type: 'change_home_data',
    topicList: result.topicList,
    artList: result.artList,
    recommends: result.recommends,
    name: result.name,
})
export const getHomeInfo = () => {

    return (dispatch) => {
        axios.get('/api/api.json').then((res) => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }

}
export const testHomeInfo = (dispatch) => {
    return (dispatch) => {
        axios.get('/api/api.json').then((res) => {
            const result = res.data.data
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                artList: result.artList,
                recommends: result.recommends,
                name: result.name,
            }
            dispatch(changeHomeData(result))
        });
    }


    // return (dispatch)=>{
    //     axios.get('/api/api.json').then((res)=>{
    //         const result=res.data.data
    //         dispatch(changeHomeData(result)) 
    //     })
    // } 

}
