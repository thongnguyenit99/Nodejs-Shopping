function check() {
    var ck = document.getElementById("checkmatkhau");
    if (ck.checked == true) {
        $("#matkhau").html('<div class="col-md-12 col-xs-12 col-sm-12"><div class="form-group row"> <label for="matkhaucu" class="col-sm-3 col-form-label">Mật khẩu cũ</label> <div class="col-sm-9 col-md-7"> <input type="password" class="form-control" id="matkhaucu" placeholder="Nhập mật khẩu cũ"> </div> </div> <div class="form-group row"> <label for="matkhaumoi" class="col-sm-3 col-form-label">Mật khẩu mới</label> <div class="col-sm-9 col-md-7"> <input type="password" class="form-control" id="matkhaumoi" placeholder="Nhập mật khẩu mới"> </div> </div> <div class="form-group row"> <label for="nhaplaimatkhau" class="col-sm-3 col-form-label">Nhập lại mật khẩu</label> <div class="col-sm-9 col-md-7"> <input type="password" class="form-control" id="nhaplaimatkhau" placeholder="Nhập lại mật khẩu mới"> </div> </div></div>');
    }
    else {
        $("#matkhau").html('');
    }
}