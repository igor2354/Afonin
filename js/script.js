
function videoName(selector) {
  $("#tab-2")
    .find($(".publication-2:nth-child(4)"))
    .find(selector)
    .text($("#tab-2").find($(".publication-2:nth-child(1)")).find(selector).text());
}

function pauseVideo(element) {
  const video = $(".publication-2__video").find("video");
  $.each(video, function (index, val) {
    if (element[0] != val) {
      val.pause();
    }
  });
}

$(document).ready(function () {
  $(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    if (scrolled > 141) {
      $(".header").addClass("scrolled");
      $(".header").next().addClass("scrolled");
    }
    if (scrolled <= 141) {
      $(".header").removeClass("scrolled");
      $(".header").next().removeClass("scrolled");
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

  $(".tab-btn").on("click", function (event) {
    event.preventDefault();

    $(".tab-btn").removeClass("active");
    $(".tab-item").removeClass("active");

    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
  });
  $(".tab-btn:first").click();

  //=====================IMG TO BACKGROUND CSS================================
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css("background", 'url("' + $(this).find("img").attr("src") + '") no-repeat center / cover');
    }
  });

  //==================PLAY VIDEO==============================================

  videoName(".publication-2__name");
  videoName(".publication-2__text");

  $(".publication-2__video-prev").on("click", function () {
    if ($(this).parents(".publication-2__video").find("video").get(0).paused) {
      $(this).parents(".publication-2__video").find("video").get(0).play();
      $(this).css({ display: "none" });
    }
  });

  $(".publication-2__video").on("click", function (e) {
    if ($(this)[0] != $(".publication-2__video:first")[0]) {
      $(".publication-2__video:first").parent().before($(this).parent());
      $("#tab-2")
        .find($(".publication-2:nth-child(4)"))
        .find(".publication-2__name")
        .text($(this).parent().find(".publication-2__name").text());
      $("#tab-2")
        .find($(".publication-2:nth-child(4)"))
        .find(".publication-2__text")
        .text($(this).parent().find(".publication-2__text").text());

      pauseVideo($(this).find("video"));
    }
  });

  $(".video__prev").on("click", function () {
    if ($(this).parent().find("video").get(0).paused) {
      $(this).parent().find("video").get(0).play();
      $(this).css({ display: "none" });
      $(this).parent().addClass("play");
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
    focusOnSelect: true,
    // responsive: [
    //   {
    //     breakpoint: 1700,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    // ],
  });
  $(".mass-media__slider").slick({
    arrows: true,
    slidesToShow: 4,
    centerMode: true,
    // responsive: [
    //   {
    //     breakpoint: 1500,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    // ],
  });

  $(".person__slider-1").slick({
    arrows: true,
    slidesToShow: 3,
    dots: true,
    appendArrows: $(".person__arrow-1"),
    appendDots: $(".person__dots-1"),
    // responsive: [
    //   {
    //     breakpoint: 1500,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    // ],
  });

  $(".person__slider-2").slick({
    arrows: true,
    slidesToShow: 3,
    dots: true,
    appendArrows: $(".person__arrow-2"),
    appendDots: $(".person__dots-2"),
    // responsive: [
    //   {
    //     breakpoint: 1500,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    // ],
  });

  //======================scrollbar=================

  $(".projects__column").mCustomScrollbar({
    theme: "my-theme",
    autoDraggerLength: false,
    scrollInertia: 300
  });

  //===============ANIMATION SCROLL======================
  const animItems = $(".anim-items");

  if (animItems.length > 0) {
    $(window).on("scroll", animOnScroll);
    function animOnScroll() {
      $.each(animItems, function (index, val) {
        const animItem = animItems.eq(index);
        const animItemHeight = animItem.innerHeight();
        const animItemOffset = animItem.offset().top;
        const animStart = 10;

        let animItemPoint = $(window).height() - animItemHeight / animStart;

        if (animItemHeight > $(window).height()) {
          animItemPoint = $(window).height() - $(window).height() / animStart;
        }

        if ($(window).scrollTop() > animItemOffset - animItemPoint && $(window).scrollTop() < animItemOffset + animItemHeight) {
          animItem.addClass("animate");
        } else {
          if (!animItem.hasClass("anim-no-scrollTop")) {
            animItem.removeClass("animate");
          }
        }
      });
    }
    setTimeout(animOnScroll, 0);
  }
  //=========================MACH
  let match = window.matchMedia("(max-width: 1880px)");

  function sizeTeam() {
    if (match.matches) {
      $(".item-team__image").find("rect").attr({ width: "225", height: "225", x: "45", y: "38" });

      $.each($(".item-team__wrap"), function (index, val) {
        $(val).hover(
          function () {
            $(this).find($("rect")).attr({ width: "100%", height: "100%", x: "0", y: "0" });
          },
          function () {
            $(this).find($("rect")).attr({ width: "225", height: "225", x: "45", y: "38" });
          }
        );
      });
    } else {
      $(".item-team__image").find("rect").attr({ width: "300", height: "300", x: "60", y: "50" });
      $.each($(".item-team__wrap"), function (index, val) {
        $(val).hover(
          function () {
            $(this).find($("rect")).attr({ width: "100%", height: "100%", x: "0", y: "0" });
          },
          function () {
            $(this).find($("rect")).attr({ width: "300", height: "300", x: "60", y: "50" });
          }
        );
      });
    }
  }
  match.addListener(sizeTeam);
  sizeTeam();
});
