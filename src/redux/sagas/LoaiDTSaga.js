import Axios from "axios"
import { call, put, delay, fork, take, takeEvery, takeLatest } from "redux-saga/effects"
import { ADD_LOAI_API, DELETE_LOAI_API, GET_LOAILISH_API, GET_LOAI_API, PUT_LOAI_API } from "../constants/LoaiDTConst"
import { LoaiDTService, loaidtService } from "../../serviecs/LoaiDTServiecs"
import { STATUS_CODE } from "../../util/constants/settingSystem"


//20/5/2023 viết chức năng gettaskapiaction
function* getTaskApiActicon(action) {

    try {
        let { data, status } = yield call(loaidtService.getTaskApi)

        if (status === STATUS_CODE.SUCCESS) {

            //sau khi lấy giá trị thành công dùng puy giống dispath
            yield put({
                type: GET_LOAI_API,
                taskList: data
            })
        }
        else {
            console.log('error')
        }
        //call api ....
    }
    catch (err) {
        console.log('error')
    }
}


export function* theodoiActionGetLoaisp() {
    yield takeLatest(GET_LOAILISH_API, getTaskApiActicon)
}




//thêm sua api

function* addputTaskApiAction(action) {
    const { tit, idLoaiDT, tenLoaiDT } = action;
    console.log('a', action)

    if (tit === 'Thêm Loại Điện Thoại') {
        const { data, status } = yield call(() => {
            return loaidtService.addTaskApi(idLoaiDT,tenLoaiDT)
        })

        if (status === 200) {
            yield put({
                type: GET_LOAILISH_API
            })
        }
    }
    else
    {
        const { data, status } = yield call(() => {
            return loaidtService.putTaskLoai(idLoaiDT,tenLoaiDT)
        })

        if (status === 200) {
            yield put({
                type: GET_LOAILISH_API
            })
        }

    }

}

export function* theodoiActionAddPutLoaisp() {
    yield takeLatest('SAVE_LOAI', addputTaskApiAction)
}




//delete

function* deleteTaskApiActionloai(action) {

    const { idLoaiDT } = action

    try {
        const { data, status } = yield call(() => {
            return loaidtService.deleteTaskLoai(idLoaiDT)
        })

        if (status === 204) {
            yield put({
                type: GET_LOAILISH_API
            })
        }


    } catch (err) {
        console.log(err)
    }
}

export function* theodoiActionDeleteLoaisp() {
    yield takeLatest(DELETE_LOAI_API, deleteTaskApiActionloai)
}


//put sua
// function* putTaskApiActionloai(action) {

//     const { idLoaiDT,tenLoaiDT } = action

//     try {
//         const { data, status } = yield call(() => {
//             return loaidtService.putTaskLoai(idLoaiDT,tenLoaiDT)
//         })

//         if (status === STATUS_CODE.SUCCESS ) {
//             yield put({
//                 type: GET_LOAILISH_API
//             })
//         }

//     } catch (err) {
//         console.log(err)
//     }
// }

// export function* theodoiActionPutLoaisp() {
//     yield takeLatest(PUT_LOAI_API, putTaskApiActionloai)
// }