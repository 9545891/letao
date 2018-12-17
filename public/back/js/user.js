// 
$(function () {

    // 
    // 请求用户数据

    var currentPage = 1; //当前页
    var pageSize = 5; //每页 数据条数

    var currentId; //当前修改用户的id
    var isDelete; //当前修改的状态

    render();

    function render() {
        $.ajax({
            type: "get",
            url: "/user/queryUser",
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: "json",
            success: function (res) {
                // console.log(res);
                var htmlStr = template('tpl', res);
                $('tbody').html(htmlStr);
                // 翻页
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    //当前页
                    currentPage: res.page,
                    //总页数
                    totalPages: Math.ceil(res.total / res.size),
                    //设置控件的大小，mini, small, normal,large
                    size: "normal",
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page;
                        render();
                    }
                });
            }
        });
    }


    // 点击事件  禁用 启用事件

    $('tbody').on('click', '.btn', function () {
        // console.log(111)
        $('#userModal').modal("show");
        currentId = $(this).parent().data('id');
        // console.log(currentId);
        isDelete = $(this).hasClass('btn-danger') ? 0 : 1
    })

    $('#submitBtn').on('click', function (e) {
        // e.preventDefault()
        $.ajax({
            type: "post",
            url: "/user/updateUser",
            data: {
                id: currentId,
                isDelete: isDelete
            },
            dataType: "json",
            success: function (res) {
                if (res.success) {
                    $('#userModal').modal("hide");
                    render();
                }
            }
        });
    })

})