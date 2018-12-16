$(function () {

    // 绘制柱状图 

    // 准备好dom 初始化echars实例

    var echarts_left = echarts.init(document.querySelector('.echarts_left'))

    // 配置图标数据
    option = {
        // 标题
        title: {
            text: '最近一周上线人数',
            subtext: '2018.12.16',
            textStyle: {
                color: 'red',
                fontSize: 24
            }
        },
        // 提示框组件

        // 图例
        legend: {
            data: ['登陆人数', '注册人数']
        },
        // X轴数据
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        // Y轴数据一般不配置 自动生成
        yAxis: {
            type: 'value'
        },
        // 
        series: [{
            name: "登陆人数",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }, {
            name: "注册人数",
            data: [220, 20, 350, 180, 270, 10, 230],
            type: 'bar'
        }]
    };

    // 使用配置数值 绘制图标 显示
    echarts_left.setOption(option)



    // 绘制饼图
    var echarts_right = echarts.init(document.querySelector('.echarts_right'))

    option2 = {
        title: {
            // 主标题
            text: '最近登陆人数',
            // 副标题
            subtext: '2018.12.16',
            left: 'center',

            textStyle: {
                color: 'red',
                fontSize: 24
            }
        },
        tooltip: {
            trigger: 'item',
            // 配置提示框的内容
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 图例
        legend: {
            orient: 'vertical',
            top: 'center',
            bottom: 10,
            left: 'right',
            data: ['周一', '周二', '周三', '周四', '周五']
        },
        series: [{
            name: '上线人数',
            type: 'pie', //饼图
            radius: '65%', //圆的大小
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [{
                    value: 1548,
                    name: '周一',
                },
                {
                    value: 535,
                    name: '周二'
                },
                {
                    value: 510,
                    name: '周三'
                },
                {
                    value: 634,
                    name: '周四'
                },
                {
                    value: 735,
                    name: '周五'
                }
            ],
        }]
    };
    echarts_right.setOption(option2)


















})