import { all } from "redux-saga/effects";
import * as LoaiDTSaga from './LoaiDTSaga';
import * as DienThoaiSaga from './DienThoaiSaga';
// import { theodoiActionGetLoaisp } from "./LoaiDTSaga";

export function* rootSaga() {
    // yield fork(getTaskAPI)// chạy khoogn cần chờ
    yield all([
        //theo dõi action saga
        LoaiDTSaga.theodoiActionGetLoaisp(),
        LoaiDTSaga.theodoiActionAddPutLoaisp(),
        LoaiDTSaga.theodoiActionDeleteLoaisp(),
   



        //địiện thoiaj
        DienThoaiSaga.theodoiActionGetDienThoai(),
        DienThoaiSaga.theodoiActionAddPutDienThoai(),
        DienThoaiSaga.theodoiActionDeleteDienThoai(),
    ])

}

//takeEvery click nhiều lần lawnsh nghe nhièunlaanf
//takeLatest click nhiều lần lắng nghe 1 lần