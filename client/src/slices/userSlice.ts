import { createSlice } from '@reduxjs/toolkit'
import { userState } from '../types'

const initialState: userState = {
    themeLight : 'off',
    token : '',
    user : null,
    topUser : [],
    onlineUsers:0,
    allusers:0,
    weekMessage:[],
    dayMessage:[],
    growth:[]
}
 
export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setToken : (state, action) => {
            state.token = action.payload
        },
        setUserData : (state, action) => {
            state.user = action.payload
        },
        setTopConstributers : (state, action) => {
            state.topUser = action.payload
        },
        setOnlineUsers : (state, action) => {
            state.onlineUsers = action.payload
        },
        setAllUsers : (state, action) => {
            state.allusers = action.payload
        },
        setWeekMessage : (state, action) => {
            state.weekMessage = action.payload
        },
        setDayMessage : (state, action) => {
            state.dayMessage = action.payload
        },
        setGrowth : (state, action) => {
            state.growth = action.payload
        },
        setTheme : (state, action) => {
            state.themeLight = action.payload
        }
    },
})

export const { setToken , setUserData  , setTheme, setTopConstributers,setOnlineUsers, setAllUsers, setWeekMessage, setDayMessage, setGrowth} = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer