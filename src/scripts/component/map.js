module.exports = function () {

  const mapPage = document.querySelector('.map');

  if (mapPage) {
    var mapLeft, mapRight, mapCenter;
    var infoWindowLeft, infoWindowRight;

    var mapOptions, mapOptionsSecond, mapOptionsThird;
    /**на Кирова */
    mapOptions = {
      center: new google.maps.LatLng(48.4355261, 35.011555),
      zoom: 12,
      mapTypeId: 'roadmap',
    };

    mapLeft = new google.maps.Map(document.getElementById('map-canvas-left'), mapOptions);

    var myMap = {
      lat: 48.4355261,
      lng: 35.011555
    };

    var marker = new google.maps.Marker({
      position: myMap,
      map: mapLeft
    });

    /****на Победе*** */

    mapOptionsSecond = {
      center: new google.maps.LatLng(48.410512, 35.067053),
      zoom: 12,
      mapTypeId: 'roadmap',
    };

    mapRight = new google.maps.Map(document.getElementById('map-canvas-right'), mapOptionsSecond);

    var myMapSecond = {
      lat: 48.410512,
      lng: 35.067053
    };

    var markerSecond = new google.maps.Marker({
      position: myMapSecond,
      map: mapRight
    });

    /*****на Калиновой*** */

    mapOptionsThird = {
      center: new google.maps.LatLng(48.5151751, 35.0566906),
      zoom: 12,
      mapTypeId: 'roadmap',
    };

    mapCenter = new google.maps.Map(document.getElementById('map-canvas-center'), mapOptionsThird);

    var myMapThird = {
      lat: 48.5151751,
      lng: 35.0566906
    };

    var markerThird = new google.maps.Marker({
      position: myMapThird,
      map: mapCenter
    });

  };

  var mapLeft, mapRight, mapCenter;
  var infoWindowLeft, infoWindowRight;

  var mapOptions, mapOptionsSecond, mapOptionsThird;
  /**на Кирова */
  mapOptions = {
    center: new google.maps.LatLng(48.4355261, 35.011555),
    zoom: 12,
    mapTypeId: 'roadmap',
  };

  mapLeft = new google.maps.Map(document.getElementById('map-canvas-left'), mapOptions);

  var myMap = {
    lat: 48.4355261,
    lng: 35.011555
  };

  var marker = new google.maps.Marker({
    position: myMap,
    map: mapLeft
  });

  /****на Победе*** */

  mapOptionsSecond = {
    center: new google.maps.LatLng(48.410512, 35.067053),
    zoom: 12,
    mapTypeId: 'roadmap',
  };

  mapRight = new google.maps.Map(document.getElementById('map-canvas-right'), mapOptionsSecond);

  var myMapSecond = {
    lat: 48.410512,
    lng: 35.067053
  };

  var markerSecond = new google.maps.Marker({
    position: myMapSecond,
    map: mapRight
  });

  /*****на Калиновой*** */

  mapOptionsThird = {
    center: new google.maps.LatLng(48.5151751, 35.0566906),
    zoom: 12,
    mapTypeId: 'roadmap',
  };

  mapCenter = new google.maps.Map(document.getElementById('map-canvas-center'), mapOptionsThird);

  var myMapThird = {
    lat: 48.5151751,
    lng: 35.0566906
  };

  var markerThird = new google.maps.Marker({
    position: myMapThird,
    map: mapCenter
  });

}