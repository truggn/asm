let khungSuaSanPham = document.getElementById('khungSuaSanPham');
let listInputs = khungSuaSanPham.getElementsByTagName('input');
let nodeSanPhamDangSua;

function clickNutSua(id){
    // lay id san pham can sua
    khungSuaSanPham.setAttribute('idSua',id);
    // hien thi form sua san pham
    khungSuaSanPham.style.display = "flex";
    // hien thi thong tin san pham
    loadThongTinSanPham(id);

    // lay node san pham
    let button = event.target;
    let nodekhung = button.parentElement;
    let nodeSanPham = nodekhung.parentElement;
    nodeSanPhamDangSua = nodeSanPham;
}

function clickNutXoa(id){
    // xoa node san pham
    let button = event.target;
    let nodekhung = button.parentElement;
    let nodeSanPham = nodekhung.parentElement;
    nodeSanPham.remove();

    // xoa tren local
    let dataSanPham = loadDuLieuLocal('danhSachSanPham');
    let vitri = dataSanPham.findIndex(sp => sp.id == id);
    dataSanPham.splice(vitri,1);
    ghiDuLieuLocal('danhSachSanPham',dataSanPham);


}

function loadThongTinSanPham(id){
    //lay san pham tu local
    let dataSanPham = loadDuLieuLocal('danhSachSanPham');
    let sanPham = dataSanPham.find(sp => sp.id == id);

    //input ten
    listInputs[0].value = sanPham.tenSanPham;
    //input gia ban
    listInputs[1].value = sanPham.giaBan;
    //input hinh anh
    listInputs[2].value = sanPham.hinhAnh;
    //input phan tram
    listInputs[3].value = sanPham.phanTramGiamGia;
    //input khu vuc
    listInputs[4].value = sanPham.khuVuc;
}

function onClickXacNhanSua(){
    let idSanPhamSua = khungSuaSanPham.getAttribute('idSua');
    let dataSanPham = loadDuLieuLocal('danhSachSanPham');

    // thay doi thong tin san pham
    for (let i = 0; i < dataSanPham.length; i++) {
        if(dataSanPham[i].id == idSanPhamSua){
            // thay doi lai thong tin 
            dataSanPham[i].tenSanPham = listInputs[0].value;
            dataSanPham[i].giaBan = parseInt(listInputs[1].value);
            dataSanPham[i].hinhAnh = listInputs[2].value;
            dataSanPham[i].phanTramGiamGia = parseInt(listInputs[3].value);
            dataSanPham[i].khuVuc = listInputs[4].value;
            break;
        }
    }
    // luu lai tren local
    ghiDuLieuLocal('danhSachSanPham',dataSanPham);
    alert('Sửa Thành Công');

    // thay doi node
    let listNodeCon = nodeSanPhamDangSua.getElementsByTagName('td');
    listNodeCon[0].innerText = listInputs[0].value;
    listNodeCon[1].innerText = listInputs[1].value;
    listNodeCon[2].innerText = listInputs[2].value;
    listNodeCon[3].innerText = listInputs[3].value;
    listNodeCon[4].innerText = listInputs[4].value;
}
function onClickThoatSua(){
    khungSuaSanPham.style.display = "none";
}