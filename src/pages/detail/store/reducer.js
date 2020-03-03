import { fromJS } from 'immutable'
const defaultState = fromJS({
    
    artDetail:[],
   

});

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'detail_data':
            console.log(action)
            return state.merge({
                artDetail:fromJS(action.artDetail),
            })
        default:return state;
    }
}
