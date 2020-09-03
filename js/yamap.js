ymaps.ready(function () {
  let myMap = new ymaps.Map(
      "map",
      {
        center: [55.721833, 37.628882],
        zoom: 18,
        controls: [],
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "",
        balloonContent: "",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "img/icon/icon-mapmarker.png",
        // Размеры метки.
        iconImageSize: [90, 96],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, -110],
      }
    );
  myMap.geoObjects.add(myPlacemark);
});
