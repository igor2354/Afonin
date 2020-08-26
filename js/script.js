$(document).ready(function () {
  $(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    if (scrolled > 141) {
      $(".header").addClass("scrolled");
      $(".juridical").addClass("scrolled");
      $(".team").addClass("scrolled");
    }
    if (scrolled <= 141) {
      $(".header").removeClass("scrolled");
      $(".juridical").removeClass("scrolled");
      $(".team").removeClass("scrolled");
    }
  });

  $(window).on("load", function () {
    if ($(this).scrollTop() > 141) {
      $(".header").addClass("scrolled");
    }
  });

  //=====================BURGER=============================================

  $(".header__burger").on("click", function () {
    $(this).toggleClass("active");
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

  $(".publication__video").on("click", function (e) {
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
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".mass-media__slider").slick({
    arrows: true,
    slidesToShow: 4,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  //======================scrollbar=================
  $(".scrollbar-rail").scrollbar();

  //=================POPUP========================
  $.each($(".team__wrap"), function (index, val) {
    $(val).on("click", function () {
      $(".popup").addClass("open");
      $("body").addClass("lock");
      $(".popup__university").text($(this).find($(".team__info-edu")).text());
      $(".popup__spec-dicript").text(
        $(this).find($(".team__info-spec")).text()
      );
      $(".popup__contact-email").text(
        $(this).find($(".team__info-contact")).text()
      );
      $(".popup__name").text($(this).find($(".team__name")).text());
      $(".popup__post").text($(this).find($(".team__info-post")).text());
      $(".popup__image")
        .find("img")
        .attr("src", $(this).find($("image")).attr("xlink:href"));
    });
  });
  $.each($(".popup__close"), function (index, val) {
    $(val).on("click", function () {
      $(".popup").removeClass("open");
      $("body").removeClass("lock");
    });
  });
  $(".popup__body").on("click", function (e) {
    if (e.target === $(".popup__body")[0]) {
      $(".popup").removeClass("open");
      $("body").removeClass("lock");
    }
    e.stopPropagation();
  });

  //================HOVER POPUP=========================
  $.each($(".team__wrap"), function (index, val) {
    $(val).hover(
      function () {
        $(this).find($("circle")).attr({ r: "100%" });
        console.log($(this).find($("circle")));
      },
      function () {
        $(this).find($("circle")).attr({ r: "150" });
      }
    );
  });
});
