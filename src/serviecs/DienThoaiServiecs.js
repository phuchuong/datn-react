import Axios from "axios"
import { DOMAIN } from "../util/constants/settingSystem";

export class DienThoaiService {
    constructor() {

    }

    getTaskApiDienThoai = () => {
        return Axios({
            url: `${DOMAIN}/DienThoai`,
            method: 'GET',
        })
    }

    addTaskApiDienThoai = (iddt,idLoaiDT,tenDT,moTa,anhDT,mauSac,gia,soLuong,sale) => {
        return Axios({
            url: `${DOMAIN}/themdt`,
            method: 'POST',
            data:{
                iddt:iddt,
                idLoaiDT:idLoaiDT,
                tenDT:tenDT,
                moTa:moTa,
                anhDT:anhDT,
                mauSac:mauSac,
                gia:gia,
                soLuong:soLuong,
                sale:sale,
            }
        })
    }

    putTaskLoaiDienThoai = (iddt,idLoaiDT,tenDT,moTa,anhDT,mauSac,gia,soLuong,sale) => {
        return Axios({
            url: `${DOMAIN}/DienThoai?iddt=${iddt}`,
            method: 'PUT',
            data:{idLoaiDT,tenDT,moTa,anhDT,mauSac,gia,soLuong,sale}
        })
    }

    deleteTaskDienThoai = (iddt)=>{
        return Axios({
            url: `${DOMAIN}/DienThoai/${iddt}`,
            method: 'DELETE',
        })
    }
}

export const dienthoaiService = new DienThoaiService();