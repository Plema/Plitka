ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.793212, 37.489257],
          zoom: 16
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'ул. Маршала Соколовского, 3'
      });


  myMap.geoObjects.add(myPlacemark);
});