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
      $(this).css(
        "background",
        'url("' +
          $(this).find("img").attr("src") +
          '") no-repeat center / cover'
      );
    }
  });

  //==================PLAY VIDEO==============================================

  $("#tab-2")
    .find($(".publication:nth-child(4)"))
    .find(".publication__name")
    .text(
      $("#tab-2")
        .find($(".publication:nth-child(1)"))
        .find(".publication__name")
        .text()
    );

  $("#tab-2")
    .find($(".publication:nth-child(4)"))
    .find(".publication__text")
    .text(
      $("#tab-2")
        .find($(".publication:nth-child(1)"))
        .find(".publication__text")
        .text()
    );

  $(".publication__video-prev").on("click", function () {
    if ($(this).parents(".publication__video").find("video").get(0).paused) {
      $(this).parents(".publication__video").find("video").get(0).play();
      $(this).css({ display: "none" });
    }
  });

  function pauseVideo(element) {
    const video = $(".publication__video").find("video");
    $.each(video, function (index, val) {
      if (element[0] != val) {
        val.pause();
      }
    });
  }

  $(".publication__video").on("click", function () {
    if ($(this)[0] != $(".publication__video:first")[0]) {
      $(".publication__video:first").parent().before($(this).parent());
      $("#tab-2")
        .find($(".publication:nth-child(4)"))
        .find(".publication__name")
        .text($(this).parent().find(".publication__name").text());
      $("#tab-2")
        .find($(".publication:nth-child(4)"))
        .find(".publication__text")
        .text($(this).parent().find(".publication__text").text());

      pauseVideo($(this).find("video"));
    }
  });

  $(document).on("click", function (e) {
    console.log(e.target);
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
