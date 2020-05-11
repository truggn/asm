function  taoID() {
	
	var timeHienTai = new Date().getTime();

	return String (timeHienTai);
};

/**
 * 
 * @param {String} key Tên key của data 
 * @return {Array}  array object
 * Lấy dữ liệu từ local, đầu vào là key của local
 */
function loadDuLieuLocal(key){

	let data = JSON.parse(localStorage.getItem(key));

	if(data == null){
		data = new Array();
	}

	return data;
}

/**
 * 
 * @param {String} key Tên key của data 
 * @param {*} data array object
 */
function ghiDuLieuLocal(key, data){
	localStorage.setItem(key,JSON.stringify(data));
}

