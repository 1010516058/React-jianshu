import { fromJS } from 'immutable'
const defaultState = fromJS({
    
    login:false

});

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'login_data':
            return state.merge({
                login:fromJS(action.login),
            })
        case 'login/LOGOUT':
            return state.set('login',action.value)
        default:return state;
    }
}
