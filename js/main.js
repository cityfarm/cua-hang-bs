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
            banDo.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.741152742987!2d106.7020098!3d10.7779352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b9938216230e217!2zVmluY29tIENlbnRlciAoVmluY29tIMSQ4buTbmcgS2jhu59pKQ!5e0!3m2!1svi!2s!4v1617625103114!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
            break;
        case 'B':
            tenCuaHang.innerHTML = `Thế Giới Di Động - PVH`
            hinhAnh.innerHTML = `<img src="./media/hinh-b.jpg" alt="Cửa hàng B">`
            amThanh.innerHTML = ` <audio controls="controls" id="amThanh">
                    <source src="./media/am-b.m4a" />
                </audio>`
            banDo.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.108917578184!2d106.61086356977536!3d10.828352900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bd0500e7b5b%3A0x988f620a91094fb4!2zVEdERCAtIFBoYW4gVsSDbiBI4bubbg!5e0!3m2!1svi!2s!4v1617625334265!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
            break;
        case 'C':
            tenCuaHang.innerHTML = `Ngân hàng TMCP Á Châu - PGD An Sương`
            hinhAnh.innerHTML = `<img src="./media/hinh-c.jpg" alt="Cửa hàng C">`
            amThanh.innerHTML = ` <audio controls="controls" id="amThanh">
                    <source src="./media/am-c.m4a" />
                </audio>`
            banDo.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.424595445169!2d106.60817652747217!3d10.841422426438106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bd8158e83e9%3A0x47b1596be108cbd3!2zTmfDom4gaMOgbmcgVE1DUCDDgSBDaMOidSAtIFBHRCBBbiBTxrDGoW5n!5e0!3m2!1svi!2s!4v1617625670455!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
            break;
        
    }

}