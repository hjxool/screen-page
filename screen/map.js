// function loadJScript() {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://api.map.baidu.com/api?type=webgl&v=1.0&ak=EooEibTNWRSWSxpvkv1au7zKsa2YY6tK&callback=init';//等号后面的就是自动调用函数
//     document.body.appendChild(script);

//     var script2 = document.createElement('script');
//     script2.type = 'text/javascript';
//     script.src = 'https://bj.bcebos.com/v1/mapopen/api-demos/js/mapStyle.js';
//     document.body.appendChild(script2);
// }
var shadow = $('#shadow')[0];
console.log(shadow)
var showDevice = $('#showDevice')[0];
function init(dot) {
    var map = new BMapGL.Map('map');
    // 也可以直接用城市名代替point
    var point = new BMapGL.Point(104.06, 30.67);
    map.centerAndZoom(point, 10);
    map.enableScrollWheelZoom();
    // 城市选择控件
    var cityControl = new BMapGL.CityListControl({
        // 控件停靠位置
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        // 控件停靠位置的偏移量
        offset: new BMapGL.Size(20,17)
    });
    // 将控件添加到地图上
    map.addControl(cityControl);

    //创建mark图标
    var myIcon = new BMapGL.Icon("../img/icon.png", new BMapGL.Size(20, 44));
    var alertIcon = new BMapGL.Icon("../img/alertIcon@2x.png", new BMapGL.Size(20,44));
    //创建标注，使用自定义图标
    // var pt = new BMapGL.Point(116.404, 39.915);
    // var al = new BMapGL.Point(116.5, 39.815);
    // var marker = new BMapGL.Marker(pt, {
    //     icon: myIcon
    // });
    // var marker1 = new BMapGL.Marker(al, {
    //     icon: alertIcon
    // });
    for(let i = 0; i < dot.length; i++){
        let pt = new BMapGL.Point(dot[i].longitude, dot[i].latitude);
        var marker = new BMapGL.Marker(pt, {icon: myIcon});
        let address = dot[i].address;
        let customerName = dot[i].customerName;
        let projectName = dot[i].projectName;
        let customerId = dot[i].customerId;
        let projectId = dot[i].projectId;
        // let opts = {
        //     title: '信息栏'
        // };
        // let info = new BMapGL.InfoWindow('地址：' + address + '<br>创建者：' + customerName + '<br>项目名称：' + projectName, opts);
        //将标注添加到地图
        map.addOverlay(marker);
        // 给点添加点击事件
        marker.addEventListener('click', () => {
            // map.openInfoWindow(info, pt);
            shadow.style.display = 'block';
            showDevice.style.display = 'block';
            test.getDevice(customerId, projectId);
        });
    }
    

    //隐藏默认图标和文字
    map.setDisplayOptions({poiText: false});
    map.setDisplayOptions({poiIcon: false});

    //个性化地图JSON
    map.setMapStyleV2({styleId: '165f5675622db68a8439a283c454d100'});

    //搜索功能
    // var local = new BMapGL.LocalSearch(map,{
    //     renderOptions:{map: map, panel: "searchResult"}
    // });
    // function search() {
    //     var result = document.querySelector('#value').value;
    //     local.search(result);
    // }
}
// window.onload = loadJScript;