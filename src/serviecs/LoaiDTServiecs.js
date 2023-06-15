import Axios from "axios"
import { DOMAIN } from "../util/constants/settingSystem";

export class LoaiDTService {
    constructor() {

    }

    getTaskApi = () => {
        return Axios({
            url: `${DOMAIN}/LoaiDT`,
            method: 'GET',
        })
    }

    addTaskApi = (idLoaiDT,tenLoaiDT) => {

        return Axios({
            url: `${DOMAIN}/themloaidt`,
            method: 'POST',
            data:{
                idLoaiDT:idLoaiDT,
                tenLoaiDT:tenLoaiDT
            }
        })
    }
    deleteTaskLoai = (idLoaiDT)=>{
        return Axios({
            url: `${DOMAIN}/LoaiDT/${idLoaiDT}`,
            method: 'DELETE',
        })
    }
    
    putTaskLoai = (idLoaiDT,tenLoaiDT) => {
        return Axios({
            url: `${DOMAIN}/LoaiDT?maloaidienthoai=${idLoaiDT}`,
            method: 'PUT',
            data:{tenLoaiDT}
        })
    }
}

export const loaidtService = new LoaiDTService();