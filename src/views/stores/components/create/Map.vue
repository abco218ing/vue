<template>
  <div class="map">
    <input style="width: 200px; padding: 3px 4px" type="text" id="place" />
    {{ location.lat }},{{ location.lng }} <br /><br />

    <div id="container" style="width: 100%; height: 400px"></div>

    <br />
    <hr />

    <h1>地址反查：<a href="https://lbs.qq.com/getPoint/">验证</a></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: {},
    };
  },
  mounted() {
    var map = new window.qq.maps.Map(document.getElementById("container"), {
      center: new window.qq.maps.LatLng(39.916527, 116.397128),
      zoom: 13,
    });
    //实例化自动完成
    var ap = new window.qq.maps.place.Autocomplete(
      document.getElementById("place")
    );
    var keyword = "";
    //调用Poi检索类。用于进行本地检索、周边检索等服务。
    var searchService = new window.qq.maps.SearchService({
      complete: function (results) {
        if (results.type === "CITY_LIST") {
          searchService.setLocation(results.detail.cities[0].cityName);
          searchService.search(keyword);
          return;
        }
        var pois = results.detail.pois;
        var latlngBounds = new window.qq.maps.LatLngBounds();
        for (var i = 0, l = pois.length; i < l; i++) {
          var poi = pois[i];
          latlngBounds.extend(poi.latLng);
          // var marker = new window.qq.maps.Marker({
          //     map:map,
          //     position: poi.latLng
          // });

          // marker.setTitle(poi.name);
        }
        map.fitBounds(latlngBounds);
      },
    });
    //添加监听事件
    window.qq.maps.event.addListener(ap, "confirm", function (res) {
      keyword = res.value;
      searchService.search(keyword);
    });

    //添加dom监听事件
    let markersArray = [];
    window.qq.maps.event.addDomListener(map, "click", (event) => {
      // 全部清除
      if (markersArray) {
        for (let i in markersArray) {
          markersArray[i].setMap(null);
        }
        markersArray.length = 0;
      }
      // 增加新的

      // addMarker(event.latLng);
      let location = event.latLng;
      var marker = new window.qq.maps.Marker({
        position: location,
        map: map,
      });
      markersArray.push(marker);

      // 显示坐标
      // document.querySelector("span").innerHTML = location;
      console.log(location);
      this.location = location;
    });
  },
};
</script>

<style></style>
