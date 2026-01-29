import { createSlice, current } from "@reduxjs/toolkit"
// import uuid from 'react-native-uuid';

const initialState = {
    height: 30,
    modal: false,
    hideTeam: false,
    show_overlay_menu: false,
    menu_overlay_listener: false
}


export const generalSlice:{actions?:any, reducer?:any} = createSlice({
    name: "generalSlice",
    initialState,
    reducers: {
        updateGeneralData: (state?:any, action?:any)=>{
            const {which, data} = action.payload
            if(typeof data === "function"){
                const curr = current(state)
                const newUser = data(curr[which])
                // const newUser = data(state[which])
                state[which] = newUser
            } else {
                state[which] = data
            }
        }
    }    
})

export const {updateGeneralData} = generalSlice.actions

export default generalSlice.reducer