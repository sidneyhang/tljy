var sContent =
"<p style='margin:0 0;padding:0 0'>合肥天狼教育基地</p>";
var map = new BMap.Map("allmap");
var point = new BMap.Point(117.060217, 31.925103);
var marker = new BMap.Marker(point);
var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
map.centerAndZoom(point, 11);
map.addOverlay(marker);
marker.addEventListener("click", function () {
this.openInfoWindow(infoWindow);
//图片加载完毕重绘infowindow
document.getElementById('imgDemo').onload = function () {
    infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
}
});