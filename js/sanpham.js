
function taoDoiTuongSanPham(tenSanPham,giaBan,hinhAnh,khuVuc,phanTramGiamGia,id) {
	var sanPham = new Object();
	sanPham.tenSanPham= tenSanPham;
	sanPham.giaBan = giaBan;
	sanPham.hinhAnh= hinhAnh;
	sanPham.khuVuc = khuVuc;
	sanPham.phanTramGiamGia = phanTramGiamGia;

	if (id!= null) {
		sanPham.id = id;
	}else{
		sanPham.id = taoID();
	}
	

	// viet phuong thuc cho doi tuong

	sanPham.tinhGiaBan = function(){
		console.log(this.giaBan);
		var giaBan = this.giaBan * ((100- this.phanTramGiamGia)/100);
		return giaBan;
	}
	// ham chuyen doi tuong thanh json
	sanPham.toJSon = function(){
		var json = JSON.stringify(this);
		return json;
	}


	return sanPham;
	
};
function truyXuatSanPhamTheoID(idSanPham){
	var sanPham = new Object();

	var danhSachSanPham = layDanhSachSanPhamTuLocal();

	for (var i = 0; i < danhSachSanPham.length; i++) {
		var sanPhamHienTai = danhSachSanPham[i];
		if (sanPhamHienTai.id==idSanPham) {
			sanPham= sanPhamHienTai;
		}
	}
	// chuyển thành đối tượng đầy đủ
	sanPham = taoDoiTuongSanPham(sanPham.tenSanPham ,sanPham.giaBan, sanPham.hinhAnh ,sanPham.khuVuc, sanPham.phanTramGiamGia ,
		sanPham.id);
	
 return sanPham;
};
function layDanhSachSanPhamTuLocal(){
	var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');

	var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

	return danhSachSanPham;
};

function chuyenDoiTuongThanhHTML(sanPham) {
	sanPham = taoDoiTuongSanPham(sanPham.tenSanPham , sanPham.hinhAnh,sanPham.giaBan,sanPham.phanTramGiamGia,sanPham.khuVuc,sanPham.id);
	 var HTML ='';
            HTML = HTML + "<div class='sanpham'>";
            HTML = HTML + "<div class='hien-thi-sanpham'>";
            HTML = HTML + "<img src='" + sanPham.hinhAnh +"'/>"
            HTML = HTML + "<h1 class='tensanpham'>" + sanPham.tenSanPham + "</h1>";
            HTML = HTML + "<s class='giasanpham'>" + sanPham.giaBan + 'VND' + "</s>";
            HTML = HTML + "<p class='phanTramGiamGia'>" + '-' + sanPham.phanTramGiamGia + '%' + "</p>";
            HTML = HTML + "<p class='giamgia'> " + 'Chỉ còn :' +sanPham.tinhGiaBan() + 'VND' +"</p>";
            HTML = HTML + "<button onclick='onclickDuaVaoGioHang("+sanPham.id+")' type='button' class='btn'>Add to card</button>"
            HTML = HTML + "<p class='khuvucsp'>" + sanPham.khuVuc + "</p>";
            HTML = HTML + "</div>"
            HTML = HTML + "</div>"
            return HTML;
};
    function onclickDuaVaoGioHang1(idSanPham) {
             console.log(idSanPham);
     		// lay danh sach item gio hang tu local


     		var danhSachItemGioHang = layDanhSachItemGioHang1();
            console.log(danhSachItemGioHang);
     		var itemEmpty = false;
     		// nếu tồn tại thì tăng só lượng
     		for (var i = 0; i < danhSachItemGioHang.length; i++) {
     			var gioHangHienTai = danhSachItemGioHang[i];
     			if (gioHangHienTai.idSanPham==idSanPham) {
     				danhSachItemGioHang[i].soLuong++;
     				itemEmpty = true;
     			}
     		}
     		if (itemEmpty==false) {
     			var itemGioHang = taoGioHang(idSanPham ,1);
                console.log(itemGioHang);
                console.log(danhSachItemGioHang);
     			danhSachItemGioHang.push(itemGioHang);
                console.log(danhSachItemGioHang);
     		}
     		// thuc hien luu tru xuống local 
     		luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
     	};

     	    function layDanhSachItemGioHang1() {
	var danhSachItemGioHang= new Array();
	 var jsonDanhSachItemGioHang = localStorage.getItem('danhSachItemGioHang');
	 if (jsonDanhSachItemGioHang != null ) {
	 	danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
	 }
	return danhSachItemGioHang;
}


