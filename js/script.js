function popupTeam(el) {
  $(".popup__university").text(el.find($(".item-team__info-edu")).text());
  $(".popup__spec-dicript").text(el.find($(".item-team__info-spec")).text());
  $(".popup__contact-email").text(el.find($(".item-team__info-contact")).text());
  $(".popup__name").text(el.find($(".item-team__name")).text());
  $(".popup__post").text(el.find($(".item-team__info-post")).text());
  $(".popup__image")
    .find("img")
    .attr("src", el.find($("image")).attr("xlink:href"));
}

function popupSupport(callback) {
  $(".popup").addClass("open");
  $("body").addClass("lock");
  $(".popup-2").find($(".support__group")).remove();
  $(".popup-2").find($(".support__list-popup")).remove();
  callback();
}

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

  $.each($(".popup-open"), function (index, val) {
    $(val).on("click", function () {
      $(".popup").addClass("open");
      $("body").addClass("lock");

      if ($(this).parents(".team__wrap")) {
        popupTeam($(val));
      }

      if ($(this).parents(".support__wrap")) {
        popupSupport(function () {
          $(val).parent().find(".support__group").clone().prependTo(".popup__content");
          $(val).parent().find(".support__list-popup").clone().appendTo(".popup__content");
        });
      }
    });
  });

  $.each($(".popup-close"), function (index, val) {
    $(val).on("click", function (e) {
      if (e.target === $(".popup__body")[0] || e.target === $(".popup__close")[0]) {
        $(".popup").removeClass("open");
        $("body").removeClass("lock");
      }
    });
  });

  //================HOVER TEAM=========================
  $.each($(".item-team__wrap"), function (index, val) {
    $(val).hover(
      function () {
        $(this).find($("circle")).attr({ r: "100%" });
      },
      function () {
        $(this).find($("circle")).attr({ r: "150" });
      }
    );
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
});
