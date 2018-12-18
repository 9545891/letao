$(function () {

    // 
    // 请求用户数据


    var currentPage = 1; //当前页
    var pageSize = 5; //每页 数据条数

    render();

    function render() {
        $.ajax({
            type: "get",
            url: "/product/queryProductDetailList",
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            dataType: "json",
            success: function (res) {
                console.log(res);
                var htmlStr = template('product_list', res);
                $('tbody').html(htmlStr);
                // 翻页
                $("#pagintor").bootstrapPaginator({
                    // 版本
                    bootstrapMajorVersion: 3,
                    //当前页
                    currentPage: res.page,
                    //总页数
                    totalPages: Math.ceil(res.total / res.size),
                    //设置控件的大小，mini, small, normal,large
                    size: "normal",
                    onPageClicked: function (event, originalEvent, type, page) {
                        currentPage = page;
                        render();
                    }
                });
            }
        });
    }


    // 点击事件  禁用 启用事件

    // $('#btn-add').on('click', function () {
    //     $('#firstModal').modal("show");
    //     $.ajax({
    //         type: "get",
    //         url: "/category/queryTopCategoryPaging",
    //         data: {
    //             page: 1,
    //             pageSize: 100
    //         },
    //         dataType: "json",
    //         success: function (res) {
    //             // console.log(res)
    //             var htmlStr = template('lis', res)
    //             $('.dropdown-menu').html(htmlStr);
    //         }
    //     });
    // })


    // 给下拉列表注册点击事件  点击时获取数据

    // $('.dropdown-menu').on('click', 'a', function () {
    //     // console.log(this);
    //     var txt = $(this).text()
    //     // console.log(txt);
    //     // 获取一级分类
    //     $('#dropdowntext').text(txt)
    //     var id = $(this).data('id')
    //     $('[name="categoryId"]').val(id)
    //     // 隐藏表单的 校验
    //     $('#form').data("bootstrapValidator").updateStatus('categoryId', 'VALID')
    // })



    // 表单验证插件初始化
    // $('#form').bootstrapValidator({
    //     // 配置排除项, 对隐藏域也进行校验
    //     excluded: [],
    //     // 配置图标
    //     feedbackIcons: {
    //         valid: 'glyphicon glyphicon-ok',
    //         invalid: 'glyphicon glyphicon-remove',
    //         validating: 'glyphicon glyphicon-refresh'
    //     },

    //     //3. 指定校验字段
    //     fields: {
    //         //校验用户名，对应name表单的name属性
    //         categoryId: {
    //             validators: {
    //                 //不能为空
    //                 notEmpty: {
    //                     message: '请输入一级分类'
    //                 }
    //             }
    //         },
    //         brandName: {
    //             validators: {
    //                 //不能为空
    //                 notEmpty: {
    //                     message: '请输入二级分类名称'
    //                 }
    //             }
    //         },
    //         brandLogo: {
    //             validators: {
    //                 //不能为空
    //                 notEmpty: {
    //                     message: '请选择图片'
    //                 }
    //             }
    //         },
    //     }
    // })


    // 调用fileupdload方法完成文件上传初始化
    // $("#fileupload").fileupload({
    //     dataType: "json", //e：事件对象    
    //     //data：图片上传后的对象，通过
    //     // data.result.picAddr可以获取上传后的图片地址    
    //     done: function (e, data) {
    //         // console.log(data);
    //         var result = data.result; //后台返回的对象
    //         var picUrl = result.picAddr //图片路径
    //         console.log(picUrl)
    //         $('#imgBox img').attr('src', picUrl)
    //         $('[name="brandLogo"]').val(picUrl)

    //         // 隐藏域 校验  
    //         $('#form').data("bootstrapValidator").updateStatus('brandLogo', 'VALID')
    //     }
    // });



    // 提交表单
    // $('#form').on('success.form.bv', function (e) {
    //     // 阻止默认的提交
    //     e.preventDefault()
    //     // console.log(111);
    //     $.ajax({
    //         type: "post",
    //         url: "/category/addSecondCategory",
    //         data: $('#form').serialize(),
    //         dataType: "json",
    //         success: function (res) {
    //             if (res.success) {
    //                 $('#firstModal').modal("hide");

    //                 currentPage = 1;
    //                 render();
    //                 // 重置输入框
    //                 $('#form').data("bootstrapValidator").resetForm(true);

    //                 // 由于下拉列表不是表单元素 ，需要手动重置
    //                 $('#dropdowntext').text('请选择一级分类')
    //                 $('#imgBox img').attr('src', './images/none.png')
    //             }
    //         }
    //     });
    // })



})