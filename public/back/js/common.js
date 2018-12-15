// 进度条
$(document).ajaxStart(function () {
    NProgress.start();
})

$(document).ajaxStop(function () {
    // 模拟网络延迟
    // setInterval(function () {
    //     NProgress.done();
    // }, 1000)
    NProgress.done();
})


// 
$(function () {
    // 二级菜单影藏显示
    $('.lt_aside .nav .category').on('click', function () {
        $('.lt_aside .child').stop().slideToggle();
    })


    // 左侧菜单切换效果
    $('.icon_menu').on('click', function () {
        $('.lt_aside').toggleClass('hidemenu')
        $('.lt_top').toggleClass('hidemenu')
        $('.lt_main').toggleClass('hidemenu')

    })


    // 退出功能 
    $('.icon_logout').on('click', function () {
        // 让模态框显示
        $('#logoutModal').modal('show');
    })



    // 发送ajax请求
    $('#btn_logout').on('click', function () {
        $.ajax({
            type: "get",
            url: "/employee/employeeLogout",
            dataType: "json",
            success: function (res) {
                if (res.success) {
                    location.href = 'login.html'
                }
            }
        });
    })
})