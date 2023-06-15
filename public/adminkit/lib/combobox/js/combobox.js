$(document).ready(function(){
    $(document).on("click",".m-combobox button",btnComboboxClick);

    $(document).on("click",".m-combobox .combobox_item",comboboxItemOnSelect);

    //loading dl vào cbx
    // fetch("https://cukcuk.manhnv.net/api/v1/CustomerGroups")
    // .then(res=>res.json())
    // .then(res=>{
    //     $('.m-combobox .combobox_data').empty();
    //     for(const item of res){
    //         let html=`
    //         <div class="combobox_item" value="${item.CustomerGroupId}">${item.CustomerGroupName}</div>
    //         `
            
    //         $('.m-combobox .combobox_data').append(html);
    //     }
    // })

    //tìm tất cả các element là mcombobox
    var mcomboboxs=$("mcombobox");
    for(const cbx of mcomboboxs){
        let id=cbx.getAttribute("id");
        let api=cbx.getAttribute("api");
        let value=cbx.getAttribute("value");
        let text=cbx.getAttribute("text");
        let width=cbx.getAttribute("width");
        let type=cbx.getAttribute("type");
        var comboboxHTML=$(`
        <div class="m-combobox" id="${id}">
        <input type="text" class="${width}">
        <button></button>
        <div class="combobox_data ${type}" hidden>
            
        </div>
        
    </div>`);
    $.ajax({
        type:"get",
        url:api,
        async:false,
        success:function(res){
  
            for(const item of res){
                let html=`
                <div class="combobox_item--all">
                    <div class="combobox_item" value="${item[value]}">${item[text]}</div>
                    <div class="combobox_item--icon"></div>
                </div>
                `
                $(comboboxHTML).find(".combobox_data").append(html);

            }
            $(comboboxHTML).data("data",res);
            $(comboboxHTML).data("text",text);
            $(comboboxHTML).data("value",value);
            cbx.replaceWith(comboboxHTML[0]);
        }
    })
    }
    
    $(document).on("keyup",".m-combobox",function(){
        var valueK=$(this).children(1).val();
        console.log(valueK);

        var val=$(this).data("data");
        console.log(val);
        let text=$(this).data("text");
        console.log(text);
        let value=$(this).data("value");
        console.log(value);
        $(this).find(".combobox_data").empty();
        for(const item of val){
            let val1=item[text].toLowerCase();
            let val2=valueK.toLowerCase();
            if(removeAccents(val1).includes(removeAccents(val2))){
                let html=`
                <div class="combobox_item--all">
                    <div class="combobox_item" value="${item[value]}">${item[text]}</div>
                    <div class="combobox_item--icon"></div>
                </div>
                `
                $(this).find(".combobox_data").append(html);
            }
            else{
                continue;
            }
        }
        
        $(this).find(".combobox_data").show();

    });


})

function removeAccents(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function btnComboboxClick(){

    $(this).toggleClass("button-background");
    // $(this.previousElementSibling).addClass("input-forcus");
    if($(this).hasClass("button-route")){
        $(this).removeClass("button-route");
    }else{
        $(this).addClass("button-route");
        $(this.previousElementSibling).focus();
    }
    //if($(this.previousElementSibling).hasClass("input-forcus")){
       
    //}
    
    $(this.nextElementSibling).toggle();
}
function comboboxItemOnSelect(){
    //lấy dl
    const text =this.textContent;

    const value=this.getAttribute('value');
    //đẩy lên input
    let parent=this.parentElement.parentElement;
    let input=$(parent).siblings('input');
    console.log(input);
    //xóa border ở ô input
    input[0].classList.remove("input-focus");
    $(input).val(text);
    //in đậm, đánh dấu đã chọn, xóa đánh dấu cũ
    var listItem=document.getElementsByClassName("combobox_item");
    let len=listItem.length;
    for(var i =0; i<= len-1;i++){
        if(listItem[i].classList.contains("combobox__item--selected")){
            console.log(listItem[i].nextSibling);
            listItem[i].nextElementSibling.classList.remove("icon__check");
            listItem[i].classList.remove("combobox__item--selected");
            break;
        }
    }
    console.log($(this.nextElementSibling));
    $(this.nextElementSibling).addClass("icon__check");
    $(this).addClass("combobox__item--selected");
    //chuyển icon trong button đi xuống
    $(parent.previousElementSibling).removeClass("button-route");
    
    //ẩn form data
    $(parent).hide();
    //lưu value vừa chọn
    $(parent.parentElement).data('value',value);


}

