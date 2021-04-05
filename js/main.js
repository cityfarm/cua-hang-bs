const log = console.log;



function showCuaHang(_cuaHang) {
    let html = ``
    _cuaHang.forEach(item => {
        html += `<tr>
                    <td>${item.tenCuaHang}</td>
                    <td>${item.diaChi}</td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="showChiTiet('${item.idCuaHang}')">Chi Tiết</button>
                    </td>
                </tr>`
    })
    tbCuaHang.innerHTML = html
}


function showChiTiet(_id) {
    // window.location=`Giao_dien/quanly.html`
    sessionStorage.setItem("id", _id);
    window.location = `./detail.html`
}


function getID() {
    let user = JSON.parse(sessionStorage.getItem("user"))
    Th_Thong_tin.innerHTML += ` <a href="javascript:void(0)" onclick="thoatDangnhap()">Thoát đăng nhập</a>`

}

