$(function () {

    // 
    // 请求用户数据


    var currentPage = 1; //当前页
    var pageSize = 5; //每页 数据条数

    render();

    function render() {
        $.ajax({
            type: "get",
            url: "/category/queryTopCategoryPaging",
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: "json",
            success: function (res) {
                console.log(res);
                var htmlStr = template('first_list', res);
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

    $('#btn-add').on('click', function () {
        // console.log(111)
        $('#firstModal').modal("show");
        // currentId = $(this).parent().data('id');
        // // console.log(currentId);
        // isDelete = $(this).hasClass('btn-danger') ? 0 : 1
    })


    // 表单验证
    //使用表单校验插件
    $('#form').bootstrapValidator({

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            categoryName: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '请输入一级分类名称'
                    }
                }
            },
        }
    })

    // 提交表单
    $('#form').on('success.form.bv', function (e) {
        e.preventDefault()
        console.log(111);
        $.ajax({
            type: "post",
            url: "/category/addTopCategory",
            data: $('#form').serialize(),
            dataType: "json",
            success: function (res) {
                if (res.success) {
                    $('#firstModal').modal("hide");

                    currentPage = 1;
                    render();

                    // 重置输入框
                    $('#form').data("bootstrapValidator").resetForm(true);
                }
            }
        });
    })

})