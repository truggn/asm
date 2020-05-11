
function kiemTraThongTinKH(){
    var hoTen = document.getElementById('hoTen').value;
    var Email = document.getElementById('Email').value;
    var SDT = document.getElementById('SDT').value;
    var time = document.getElementById('Time').value;
    var ktemail = /^([a-zA-Z0-9])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})$/;
    var ktsdt = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    var err = true;

    if (hoTen.length==0) {
      document.getElementById('errHoTen').innerHTML = "Họ Tên không bỏ trống";
      err = false;
    }else{
      document.getElementById('errHoTen').innerHTML = "";
    }if (Email.length==0) {
      document.getElementById('errEmail').innerHTML = "Email không bỏ trống";
      err = false;
    }else{
      if (ktemail.test(Email)) {
        document.getElementById('errEmail').innerHTML = "";
        
      }else{
        document.getElementById('errEmail').innerHTML = "Email không đúng định dạng";
        err= false;
      }
    }if (SDT.length==0) {
      document.getElementById('errSDT').innerHTML = "SDT không bỏ trống";
      err = false;
    }else{
      if (ktsdt.test(SDT)) {
        document.getElementById('errSDT').innerHTML = "";
      }else{
        document.getElementById('errSDT').innerHTML = "SDT không đúng định dạng";
        err=false;
      }
    }if (time.length==0) {
      document.getElementById('errTime').innerHTML = "Time từ 0-18 tiếng";
      err = false;
    }else{
      if (time<0 || time>18) {
        document.getElementById('errTime').innerHTML = "Time từ 0-18 tiếng";
        err= false;
      }else{
        document.getElementById('errTime').innerHTML = "";
      }
    }if (err) {
      alert("Bạn đã nhập đầy đủ thông tin")
    }else{
      return false;
    }


};
