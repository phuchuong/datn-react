/* eslint-disable import/no-anonymous-default-export */
import { GET_LOAI_API } from "../constants/LoaiDTConst"

const initialState = {
    taskList: [],
    
    Component:<p>MĐ</p>,
    item:{},
    tit:""
}




export default (state = initialState, action) => {
    // console.log(action)
    // console.log('d',action);
    switch (action.type) {
        case GET_LOAI_API:
            state.taskList = action.taskList;
            return { ...state }
        case "LOG_MODAL":{
            state.Component=action.Component;
            state.item=action.item;
            state.tit=action.tit;
            return { ...state }
        }
        default:
            return state;
    }

}
