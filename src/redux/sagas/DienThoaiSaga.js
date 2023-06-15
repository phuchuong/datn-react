import Axios from "axios"
import { call, put, delay, fork, take, takeEvery, takeLatest } from "redux-saga/effects"
import { DELETE_DIENTHOAI_API, GET_DIENTHOAI_API, SET_DIENTHOAI_API } from "../constants/DienThoaiConst"
import { dienthoaiService } from "../../serviecs/DienThoaiServiecs"
import { STATUS_CODE } from "../../util/constants/settingSystem"

function* getTaskApiActiconDienThoai(action) {
    try {
        
        let { data, status } = yield call(dienthoaiService.getTaskApiDienThoai)
        //sau khi lấy giá trị thành công dùng puy giống dispath
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SET_DIENTHOAI_API,
                taskList: data
            })
            //call api ....
        }
        else {
            console.log('error')
        }
    }
    catch {
        console.log('error')
    }
}

export function* theodoiActionGetDienThoai() {
    yield takeLatest(GET_DIENTHOAI_API, getTaskApiActiconDienThoai)
}




/// sửa thêm
function* AddPutTaskApiActiconDienThoai(action) {
    const { tit, iddt, idLoaiDT, tenDT, moTa, anhDT, mauSac, gia, soLuong, sale } = action;
 
    if (tit === 'Thêm Điện Thoại') {
        const { data, status } = yield call(() => {
            return dienthoaiService.addTaskApiDienThoai(iddt, idLoaiDT, tenDT, moTa, anhDT, mauSac, gia, soLuong, sale)
        })

        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_DIENTHOAI_API
            })
        }
    }
    else {
        const { data, status } = yield call(() => {
            return dienthoaiService.putTaskLoaiDienThoai(iddt, idLoaiDT, tenDT, moTa, anhDT, mauSac, gia, soLuong, sale)
        })

        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_DIENTHOAI_API
            })
        }

    }

}

export function* theodoiActionAddPutDienThoai() {
    yield takeLatest('SAVE_DIENTHOAI', AddPutTaskApiActiconDienThoai)
}


//xóa
function* deleteTaskApiActionDienThoai(action) {
    const { iddt } = action

    try {
        const { data, status } = yield call(() => {
            return dienthoaiService.deleteTaskDienThoai(iddt)
        })

        if (status === 204) {
            yield put({
                type: GET_DIENTHOAI_API
            })
        }
    } catch (err) {
        console.log(err)
    }
}

export function* theodoiActionDeleteDienThoai() {
    yield takeLatest(DELETE_DIENTHOAI_API, deleteTaskApiActionDienThoai)
}