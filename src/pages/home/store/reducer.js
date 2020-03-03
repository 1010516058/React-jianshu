import { fromJS } from 'immutable'
const defaultState = fromJS({
    topicList:[],
    artList:[],
    recommends:[],
    name:''

});

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'change_home_data':
            console.log(action)

             return state.merge({
                topList:fromJS(action.topicList),
                artList:fromJS(action.artList),
                recommends:fromJS(action.recommends)
                // topList:fromJS(action.topicList)
            })
        default:return state;
    }
}
