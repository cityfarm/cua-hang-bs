const log = console.log;




function showChiTiet(_id) {
    // window.location=`Giao_dien/quanly.html`
    sessionStorage.setItem("id", _id);
    window.location = `./detail.html`
}


function getID() {
    let user = JSON.parse(sessionStorage.getItem("user"))
    Th_Thong_tin.innerHTML += ` <a href="javascript:void(0)" onclick="thoatDangnhap()">Thoát đăng nhập</a>`

}

function readDetail(){
    let idSelected = sessionStorage.getItem("id");
    switch (idSelected) {
        case 'A':
            tenCuaHang.innerHTML = `MANGO Vincom Đồng Khởi`
            hinhAnh.innerHTML = `<img src="./media/hinh-a.jpg" alt="Cửa hàng A">`
            amThanh.innerHTML = ` <audio controls="controls" id="amThanh">
                    <source src="./media/am-a.m4a" />
                </audio>`
            banDo.innerHTML = `<a target="_blank" href="https://www.google.com/maps/dir//B1-+33-37,+Vincom+Center+%C4%90%E1%BB%93ng+Kh%E1%BB%9Fi,+72+L%C3%AA+Th%C3%A1nh+T%C3%B4n,+P.+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+1/@10.778933,106.6880956,15z/data=!4m2!4m1!3e0">Vị trí cửa hàng trên bản đồ</a>`
            isSmoke.innerHTML=`Có`
            price.innerHTML='30.000 VND'
            isPromotion.innerHTML='Không'
            break;
        case 'B':
            tenCuaHang.innerHTML = `Thế Giới Di Động - PVH`
            hinhAnh.innerHTML = `<img src="./media/hinh-b.jpg" alt="Cửa hàng B">`
            amThanh.innerHTML = ` <audio controls="controls" id="amThanh">
                    <source src="./media/am-b.m4a" />
                </audio>`
            banDo.innerHTML = `<a target="_blank" href="https://www.google.com/maps/dir//B1-+33-37,+Vincom+Center+%C4%90%E1%BB%93ng+Kh%E1%BB%9Fi,+72+L%C3%AA+Th%C3%A1nh+T%C3%B4n,+P.+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+1/@10.778933,106.6880956,15z/data=!4m2!4m1!3e0">Vị trí cửa hàng trên bản đồ</a>`
            isSmoke.innerHTML=`Không`
            price.innerHTML='Không biết'
            isPromotion.innerHTML='Không'
            break;
        case 'C':
            tenCuaHang.innerHTML = `Ngân hàng TMCP Á Châu - PGD An Sương`
            hinhAnh.innerHTML = `<img src="./media/hinh-c.jpg" alt="Cửa hàng C">`
            amThanh.innerHTML = ` <audio controls="controls" id="amThanh">
                    <source src="./media/am-c.m4a" />
                </audio>`
            banDo.innerHTML = `<a target="_blank" href="https://www.google.com/maps/dir//B1-+33-37,+Vincom+Center+%C4%90%E1%BB%93ng+Kh%E1%BB%9Fi,+72+L%C3%AA+Th%C3%A1nh+T%C3%B4n,+P.+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+1/@10.778933,106.6880956,15z/data=!4m2!4m1!3e0">Vị trí cửa hàng trên bản đồ</a>`
            isSmoke.innerHTML=`Có`
            price.innerHTML='28.000 VND'
            isPromotion.innerHTML='Có'
            break;
        
    }

}