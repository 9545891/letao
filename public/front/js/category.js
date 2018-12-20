$(function () {

    // 进入页面发送请求

    $.ajax({
        type: "get",
        dataType: "json",
        url: "/category/queryTopCategory",
        success: function (res) {
            var htmlStr = template('leftLis', res)
            $('.main_nav ul').html(htmlStr)
            // 默认右边渲染第一个
            render(res.rows[0].id)
        }
    });




    // 渲染右边
    function render(id) {
        $.ajax({
            type: "get",
            url: "/category/querySecondCategory",
            data: {
                id: id
            },
            dataType: "json",
            success: function (res) {
                var htmlStr = template('rightLis', res)
                $('.main_content ul').html(htmlStr)
            }
        });
    }

    // 点击切换效果

    $('.main_nav ul').on('click', 'a', function () {
        // 实现切换效果

        // 左边点击效果
        $('.main_nav ul a').removeClass('current');
        $(this).addClass('current')


        //右边切换效果
        var id = $(this).data('id')
        render(id)

    })

})