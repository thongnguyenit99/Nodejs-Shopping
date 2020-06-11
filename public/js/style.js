$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
var dangnhap = 0;
function add() {
    if (dangnhap == 0) {
        alert("Vui lòng đăng nhập hoặc đăng kí để mua hàng");
        
    }
    else {
        alert("Bạn đã thêm sản phẩm thành công!")
    }
}
