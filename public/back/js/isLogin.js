//判断是否登录

$.ajax({
    type: "get",
    url: "/employee/checkRootLogin",
    dataType: "json",
    success: function (res) {
        if (res.error == 400) {
            location.href = 'login.html'
        }
        if (res.success) {
            console.log('当前用户已登录')
        }
    }
});