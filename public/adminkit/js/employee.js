$(document).ready(function(){
    //chạy các event
    initEvent();
})
//khai báo biến chuyển ngôn ngữ
var languages='VI';
//khai báo đối tượng employee tạm thời
var Employee={
    EmployeeCode:"",
    EmployeeName:"",
    // thiếu đơn vị chỗ này
    EmployeeTitle:"",
    EmployeeDateOfBirth:"",
    // thiếu radio chỗ này
    EmployeeCMND:"",
    EmployeeDateRange:"",
    EmployeeLocation:"",
    EmployeePlace:"",
    EmployeeSDT:"",
    EmployeeSDTPermanent:"",
    EmployeeEmail:"",
    EmployeeBankAccount:"",
    EmployeeBankName:"",
    EmployeeBankBranch:""
}

//hàm chạy các event
function initEvent(){
    //hiển thị modal thêm/sửa
    $(document).on("click","#addEmployee",showModal);

    //đóng thêm/sửa
    $(document).on("click",".modal_header--icon2",hideModal);
    $(document).on("click",".modal__close",hideModal);
    
    //ẩn/hiện form chức năng xóa
    $(document).on("click",".function__icon",showFunc);

    //thực hiện xóa nhân viên
    $(document).on("click",".list-func .delete__employee",deleteEmployee);

    //hủy xóa nhân viên
    $(document).on("click",".dialog__icon--exit",deleteEmployeeExit);

    //nhấn phím trên form
    $('body').on('keydown','.modal',keyShortcut);

}


//hàm hiển thị modal thêm/sửa
function showModal(){
    $(".modal").css("display","flex");
    //focus ô mã nhân viên khi hiển thị
    $("#EmployeeCode").focus();
}

//hàm ẩn modal thêm/sửa
function hideModal(){
    $(".modal").hide();
}

//hàm ẩn/hiển thị form chức năng xóa
function showFunc(){
    if($(this.nextElementSibling).hasClass("showFunc")){
        //tắt border của icon 
        $(this).css("border","none");
        //ẩn form chức năng
        $(this.nextElementSibling).removeClass("showFunc");
    }
    else{
        //hiện border của icon 
        $(this).css("border","1px solid #4262F0");
        //hiện form chức năng
        $(this.nextElementSibling).addClass("showFunc");
    }
}

//hàm xóa nhân viên
function deleteEmployee(){
    //hiện dialog cho người dùng xác nhận có thực sự muốn xóa không?
    $(".dialog").css("display","flex");
}

//hàm hủy xóa nhân viên
function deleteEmployeeExit(){
    //đóng form xác nhận xóa
    $(".dialog").css("display","none");
}

//khi người dùng nhấn trên form
function keyShortcut(e){
    //khi người dùng ấn enter
    // if(e.keyCode==MISAEnum.keyCode.ENTER){
    //     $('.modal--save').focus();
    // }

    
    //khi người dùng ấn ESC
    if(e.keyCode==MISAEnum.keyCode.ESC){
        $('.modal_header--icon2').trigger("click");
    }
}





