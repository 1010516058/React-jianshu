import axios from 'axios'
import * as constants from './constants'

export const logout =()=>({
    type:constants.LOGOUT,
    value:false
})
