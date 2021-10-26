// 设备类型分布
function deviceType() {
    var deviceTypeChart = echarts.init(document.querySelector('#pie-chart'));
    var option = {
        // 工具栏
        toolbox:{
            itemSize: 19,
            itemGap: 11,
            feature: {
                restore: {
                    icon: 'image://../img/刷新@2x.png',
                    title: '还原',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                },
                saveAsImage: {
                    icon: 'image://../img/下载@2x.png',
                    title: '下载图片',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                }
            },
            right: '2%',
            top: '4%'
        },
        // 鼠标提示信息
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        // 图例样式
        legend: {
            orient:'vertical',
            right:'5%',
            top:'20%',
            itemWidth:12,
            itemHeight:12,
            itemGap:20,
            textStyle:{
                fontSize:'14',
                fontFamily:' Microsoft YaHei',
                fontWeight:'400',
                color:'#5A79C7'
            }
        },
        // 扇形每一部分对应样式
        color: [
                '#0E41FC','#36FEE9','#07C3F9','#0195FF','#006CFF'
            ],
        // 图表数据及样式
        series: [
            {
                type: 'pie',
                radius: ['40%', '58%'],
                center: ['25%', '55%'],
                label: {
                    show: false,
                    position: 'center'
                },
                // 饼状图强调字体样式
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                // 标识线
                labelLine: {
                    show: false
                },
                data: test.deviceType
            }
        ]
    };
    // 定时获取数据
    // setInterval(() => {
    //     deviceTypeChart.setOption({
    //         series: [
    //             {
    //                 data: test.deviceType
    //             }
    //         ]
    //     });
    // }, 500);

    // 配置给实例化对象
    deviceTypeChart.setOption(option);
    // window.onresize = myChart.resize;
    // 监听窗口变化做自适应
    window.addEventListener('resize', function() {
        deviceTypeChart.resize();
    });
}
// 上报下发
function reportIssue() {
    var reportIssueChart = echarts.init(document.querySelector('#line-chart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        // 工具栏
        toolbox:{
            itemSize: 19,
            itemGap: 11,
            feature: {
                restore: {
                    icon: 'image://../img/刷新@2x.png',
                    title: '还原',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                },
                saveAsImage: {
                    icon: 'image://../img/下载@2x.png',
                    title: '下载图片',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                }
            },
            right: '2%',
            top: '4%'
        },
        legend: {
            data: ['上报', '下发'],
            right:'8%',
            top:'20%',
            // 图例样式自定义
            data:[
                {
                    name:'上报',
                    textStyle:{
                        color:'#1670F9'
                    }
                },
                {
                    name: '下发',
                    textStyle:{
                        color:'#00EAFF'
                    }
                }
            ]
    
        },
        // 网格显示
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            top: '35%',
            // 刻度标签
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: ['6月', '8月', '10月', '12月', '2月', '4月'],
            axisLabel:{//轴线字体
                color: "#5979C6"
            },
            axisLine:{//轴线横线
                lineStyle:{
                    color:'#5A6FA5'
                }
            },
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            axisLabel:{
                color: "#5979C6"
            },
            splitLine:{//分割线
                lineStyle:{
                    color:['#22345D'],
                    type:'dotted'
                }
            },
            axisLine:{
                show: false
            }
        },
        color:['#1670F9','#00EAFF'],
        series: [
            {
                name: '上报',
                type: 'line',
                showSymbol:false,
                smooth: true,
                data: [120, 132, 101, 134, 90, 230]
            },
            {
                name: '下发',
                type: 'line',
                showSymbol:false,
                smooth: true,
                data: [820, 932, 901, 934, 1290, 1330]
            }
        ]
    };
    reportIssueChart.setOption(option);
    // window.onresize = myChart.resize;
    window.addEventListener('resize', function() {
        reportIssueChart.resize();
    });

}
//设备总数统计
function deviceCount() {
    var deviceCountChart = echarts.init(document.querySelector('#bar2-chart'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // 工具栏
        toolbox:{
            itemSize: 19,
            itemGap: 11,
            feature: {
                restore: {
                    icon: 'image://../img/刷新@2x.png',
                    title: '还原',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                },
                saveAsImage: {
                    icon: 'image://../img/下载@2x.png',
                    title: '下载图片',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                }
            },
            right: '1%',
            top: '4%'
        },
        color: ['#249CF9','#FDB628'],
        legend: {
            data: [
                // {
                //     name:'2020年',
                //     textStyle:{
                //         color: '#8BACFE'
                //     }
                // },
                {
                    name: '2021年',
                    textStyle:{
                        color: '#8BACFE'
                    }
                }
            ],
            right: '2%',
            bottom: '10%',
            orient: 'vertical'
        },
        grid: {
            left: '3%',
            right: '15%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel:{
                    color: "#5979C6"
                },
            data: test.MonthCountTime,
            axisTick:{
                    show: false
                },
            axisLine:{
                    lineStyle:{
                        color:'#5A6FA5'
                    }
                }
        },
        yAxis: {
            type: 'value',
            boundaryGap: ['0%', '20%'],
            axisLabel:{
                    color: "#5979C6"
                },
            axisLine:{
                show: true,
                    lineStyle:{
                        color:'#5A6FA5'
                    }
                },
            splitLine:{
                lineStyle:{
                        color:['#30477B'],
                        type:'solid'
                }
            }
        },
        series: [
            // {
            //     name: '2020年',
            //     type: 'bar',
            //     data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            // },
            {
                name: '2021年',
                type: 'bar',
                data: test.MonthCount,
                barWidth: 12
            }
        ]
    };
    // 定时获取数据
    // setInterval(function() {
    //     deviceCountChart.setOption({
    //         xAxis: {
    //             data: test.MonthCountTime
    //         },
    //         series: [
    //             {
    //                 data: test.MonthCount
    //             } 
    //         ]
    //     });
    // },500);

    deviceCountChart.setOption(option);
    // window.onresize = myChart.resize;
    window.addEventListener('resize', function() {
        deviceCountChart.resize();
    });

}
//设备用途统计
function deviceApply() {
    var deviceApplyChart = echarts.init(document.querySelector('#bar-chart'));
    var option = {
        tooltip: {
            // trigger: 'axis',
        },
        // 工具栏
        toolbox:{
            itemSize: 19,
            itemGap: 11,
            feature: {
                restore: {
                    icon: 'image://../img/刷新@2x.png',
                    title: '还原',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                },
                saveAsImage: {
                    icon: 'image://../img/下载@2x.png',
                    title: '下载图片',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                }
            },
            right: '2%',
            top: '4%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel:{
                color: "#5979C6"
            },
            splitLine:{
                lineStyle:{
                    color:['#22345D'],
                    type:'dotted'
                }
            },
            axisLine:{
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: ['用途4', '用途3', '用途2', '用途1'],
            axisTick:{
                show: false
            },
            axisLabel:{
                color: "#5979C6"
            },
            axisLine:{
                lineStyle:{
                    color:'#5A6FA5'
                }
            }
        },
        series: [
            {
                type: 'bar',
                data: [200, 300, 400, 500],
                itemStyle:{
                    // 柱状不同颜色
                    normal:{
                        color: function(params){
                            var colorList = ['#006CFF', '#0195FF', '#07C3F9', '#1CEED8'];
                            return colorList[params.dataIndex]; 
                        }
                    }
                }
            }
        ]
    };
    deviceApplyChart.setOption(option);
    // window.onresize = myChart.resize;
    window.addEventListener('resize', function() {
        deviceApplyChart.resize();
    });

}
//设备故障比
function deviceFault() {
    var deviceFaultChart = echarts.init(document.querySelector('#gauge-chart'));
    var option = {
        // 工具栏
        toolbox:{
            itemSize: 19,
            itemGap: 11,
            feature: {
                restore: {
                    icon: 'image://../img/刷新@2x.png',
                    title: '还原',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                },
                saveAsImage: {
                    icon: 'image://../img/下载@2x.png',
                    title: '下载图片',
                    emphasis: {
                        iconStyle: {
                            textFill: "rgba(255, 253, 253, 1)"
                        }
                    }
                }
            },
            right: '2%',
            top: '4%'
        },
        series: [{
            type: 'gauge',
            center: ["50%", "60%"],
            radius: "85%",
            axisLine: {
                lineStyle: {
                    width: 10,
                    color: [
                        [0.2, '#67e0e3'],
                        [0.8, '#3488DB'],
                        [1, '#F05370']
                    ]
                }
            },
            // 指针样式
            pointer: {
                length: '70%',
                width: 4,
                itemStyle: {
                    color: '#3488DB'
                }
            },
            axisTick: {
                distance: 0,
                length: 8,
                lineStyle: {
                    color: '#42E5FB',
                    width: 1
                }
            },
            // 要加分割线，不然会默认设置黑色分割线
            splitLine: {
                show: false,
                // distance: 50,
                // length: 0,
                // lineStyle: {
                //     //设为透明与刻度线重叠
                //     color: 'transparent',
                //     width: 2
                // }
            },
            axisLabel: {
                color: '#42E5FB',
                distance: 0,
                fontSize: 10
            },
            // 仪表图内容样式设置
            detail: {
                valueAnimation: true,
                formatter: '{value}%',
                color: '#FFFFFF',
                fontSize: 20
            },
            data: [{
                value: test.faultPro
            }]
        }]
    };
    // 定时获取数据
    // setInterval(function() {
    //     deviceFaultChart.setOption({
    //         series: [{
    //             data: [{
    //                 value: test.faultPro
    //             }]
    //         }]
    //     });
    // },500);
    
    deviceFaultChart.setOption(option);
    // window.onresize = myChart.resize;
    // console.log(echarts.version);
    window.addEventListener('resize', function() {
        deviceFaultChart.resize();
    });

}