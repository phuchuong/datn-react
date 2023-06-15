/* eslint-disable import/no-anonymous-default-export */
import { SET_DIENTHOAI_API } from "../constants/DienThoaiConst";

const initialState = {
    taskList: [],
    
    Component: <p>MĐ</p>,
    item: {},
    tit: ""
}

export default (state = initialState, action) => {
    // console.log(action)
    console.log('d',action);

    switch (action.type) {
        case SET_DIENTHOAI_API:
            state.taskList = action.taskList;
            return { ...state }
        case "LOG_MODAL": {
            state.Component = action.Component;
            state.item = action.item;
            state.tit = action.tit;
            return { ...state };
        }
        default:
            return state;
    }

}
