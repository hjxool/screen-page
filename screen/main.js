// 定时获取时间
test.timer = setInterval(test.getTime,1000);
test.getToken();
test.replaceUrl();
// console.log(this);指向的是Vue实例
test.loginToken = window.sessionStorage.loginToken;
test.portData(test.loginToken);//输入密匙获取页面数据
test.mapData(test.loginToken);// 加载地图