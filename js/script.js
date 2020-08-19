$(document).ready(function () {
  $(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    if (scrolled > 141) {
      $(".header").addClass("scrolled");
      $(".juridical").addClass("scrolled");
    }
    if (scrolled <= 141) {
      $(".header").removeClass("scrolled");
      $(".juridical").removeClass("scrolled");
    }
  });

  $(window).on("load", function () {
    if ($(this).scrollTop() > 141) {
      $(".header").addClass("scrolled");
    }
  });

  //=====================TABS================================================

  $(".tabs__button").on("click", function (event) {
    event.preventDefault();

    $(".tabs__button").removeClass("active");
    $(".tabs__item").removeClass("active");

    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
  });
  $(".tabs__button:first").click();
  //=====================IMG TO BACKGROUND CSS================================
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      if ($(this).css(["background-image"])["background-image"] != "none") {
        $(this).css(
          "background",
          'url("./img/dots-publish.svg") no-repeat 30px 20px, url("./img/publish/back-opacity.png") no-repeat center / cover, url("' +
            $(this).find("img").attr("src") +
            '") no-repeat center / cover'
        );
      } else {
        $(this).css(
          "background-image",
          'url("./img/publish/back-opacity.png"), url("' +
            $(this).find("img").attr("src") +
            '")'
        );
      }
    }
  });

  //==================PLAY VIDEO==============================================
  $(".pause").on("click", function () {
    if ($(this).parents(".publication__video").find("video").get(0).paused) {
      $(this).parents(".publication__video").find("video").get(0).play();
      $(this).parents(".publication__video-prev").css({ display: "none" });
    }
  });

  //==================SLIDER================================================
  $(".reviews__slider-1").slick({
    arrows: true,
    asNavFor: ".reviews__slider-2",
  });
  $(".reviews__slider-2").slick({
    arrows: false,
    asNavFor: ".reviews__slider-1",
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "0",
  });
  $(".mass-media__slider").slick({
    arrows: true,
    slidesToShow: 4,
    centerMode: true,
  });
});
