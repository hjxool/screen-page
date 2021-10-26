// 大屏页面
var test = new Vue({
    el: '#test',
    data: {
        calender: "",//存放年月日
        weekDay: "",//存放星期
        time: "",//存放当前时间
        timer: "",//定义计时器变量，方便后面清除计时器
        value: '',//input标签双向绑定值
        deviceOnline: '',//在线设备数量
        deviceOffline: '',//离线设备数量
        deviceError: '',//异常设备
        faultPro: 0.01,//设备故障比
        deviceType: '',//设备类型分布
        MonthCountTime: [],//设备总数统计X轴
        MonthCount: [],//设备总数Y轴
        deviceTotal: [],//地图上显示的设备总数
        span: [],//创建标签用
        loginToken: '',//登陆获取的密匙
        list: [
            { date: '2021-06-01 13:08:32', name: 'HPD系列功放2', action: '离线警报已处理' },
            { date: '2021-06-01 13:08:32', name: 'HPD系列功放2', action: '离线警报已处理' },
            { date: '2021-06-01 13:08:32', name: 'HPD系列功放2', action: '离线警报已处理' },
            { date: '2021-06-01 13:08:32', name: 'HPD系列功放2', action: '离线警报已处理' },
            { date: '2021-06-01 13:08:32', name: 'HPD系列功放2', action: '离线警报已处理' }
        ]
    },
    created: function () {
        // // 定时获取时间
        // this.timer = setInterval(this.getTime,1000);
        // this.getToken();
        // // console.log(this);指向的是Vue实例
        // this.portData(this.loginToken);//输入密匙获取页面数据
    },
    beforeDestory: function () {
        // 摧毁定时器
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    methods: {
        // 页面显示时间
        getTime: function () {
            let weeks, week, year, month, day, hour, minute, second;
            weeks = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            let date = new Date();
            year = date.getFullYear();
            // 月份比较特殊，是从0开始返回的
            month = check(date.getMonth() + 1);
            day = check(date.getDate());
            week = date.getDay();
            hour = check(date.getHours());
            minute = check(date.getMinutes());
            second = check(date.getSeconds());
            //检测数字小于10的前面补零
            function check(i) {
                var num = (i < 10) ? ('0' + i) : i;
                return num;
            }
            // 获取年月日之后插入自定义符号组成新的字符串
            this.calender = year + "." + month + "." + day;
            // 根据返回的日期数字对应到相应的星期数
            this.weekDay = weeks[week];
            this.time = hour + ":" + minute + ":" + second;
        },
        // 判断百度地图控件搜索框有没有内容，没有则不显示结果框
        judgement: function () {
            if (this.value == '') {
                document.querySelector('#searchResult').style.display = 'none';
            } else {
                document.querySelector('#searchResult').style.display = 'block';
            }
        },
        // 根据字符串数组动态添加容器标签
        mapCounterSplit: function (res) {
            //地图接入总数字符串分割
            let num = res.data.data.total[0].value.toString();
            this.deviceTotal = num.split("");
            for (let i = 0; i < num.length; i++) {
                let span = document.createElement("span");
                span.appendChild(document.createTextNode(this.deviceTotal[i]));
                document.querySelector('.deviceTotal').appendChild(span);
            }
        },
        // 在getToken中执行，将获取到的密匙传入portData执行后续逻辑
        portData: function (params) {
            var _this = this;
            // console.log(this);//指向的是vue对象
            axios({
                method: 'post',
                url: 'http://182.150.116.22:20000/api/show/get',
                headers: { 'token': params }
            })
                .then(function (res) {
                    console.log(res);
                    // 验证登录
                    // _this.verifyLogin(res.data.code);
                    _this.deviceOnline = res.data.data.deviceCount[0].value;
                    _this.deviceOffline = res.data.data.deviceCount[1].value;
                    _this.deviceError = res.data.data.deviceCount[2].value;
                    _this.faultPro = res.data.data.faultPro[0].value * 100;
                    _this.deviceType = res.data.data.DeviveTypePer;
                    _this.totalEquipment(res);
                    _this.mapCounterSplit(res);

                    // echarts图标函数调用
                    deviceType();
                    reportIssue();
                    deviceCount();
                    deviceApply();
                    deviceFault();
                    // console.log(_this);//指向的是vue对象
                });
        },
        // 地图接口请求
        mapData: function (token) {
            axios({
                method: 'post',
                url: 'http://182.150.116.22:20000/api/show/project/list',
                data: {
                    data: {}
                },
                headers: { 'token': token }
            })
                .then((res) => {
                    console.log(res);
                    let mapDot = res.data.data
                    init(mapDot);
                });
        },
        //获取url携带的token
        getToken: function () {
            let url = window.location.search;
            let str = url.substring(1);
            let token = str.split('=');
            this.loginToken = token[1];
        },
        // 退出登录按钮
        returnlogin: function () {
            axios({
                method: 'post',
                url: 'http://182.150.116.22:20000/api/user/logout'
            })
                .then(() => {
                    window.location.href = '/login/login.html';
                    // 退出后清除缓存
                    window.sessionStorage.removeItem('loginToken');
                })
        },
        // 返回index页
        returnBack: function () {
            window.location.href = "/index/index.html";
        },
        //设备总数统计图表
        totalEquipment: function (res) {
            //根据阿拉伯数字对应的月份
            var months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            let monthCountTime = res.data.data.MonthCountTime;
            for (let i = 0; i < monthCountTime.length; i++) {
                let array = monthCountTime[i].split("-");
                let month = months[Number(array[1]) - 1];//array是字符串数组，数组的index必须是number不能是字符串
                this.MonthCountTime.push(month);
            }
            this.MonthCount = res.data.data.MonthCount;
        },
        // 验证登录
        verifyLogin: function (code) {
            if (code == 3005) {
                this.$alert('身份验证失效', '请重新登录', {
                    confirmButtonText: '确定',
                    callback: () => {
                        window.location.href = '../../test demo/login/login.html';
                    }
                });
            }
        },
        // 改写url
        replaceUrl: function () {
            let url = window.location.href;
            let str = url.split('?')[0];
            window.history.replaceState('', '', str);
        },
        // 获取设备及填充
        getDevice: function (customerId, projectId) {
            axios({
                method: 'post',
                url: 'http://182.150.116.22:20000/api/show/project/device/list',
                data: {
                    data: {
                        customerId: customerId,
                        project: projectId
                    }
                },
                headers: { 'token': this.loginToken }
            })
                .then((res) => {
                    console.log(res);
                });
        },
        closeButton: function () {
            document.getElementById('shadow').style.display = 'none';
            document.getElementById('showDevice').style.display = 'none';
        }
    }
});