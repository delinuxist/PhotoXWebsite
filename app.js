document.querySelector(".nav-button").addEventListener("click", function (e) {
  e.target.classList.toggle("change");
});

$(document).ready(function () {
  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 600) {
      $(".camera-img").addClass("fromLeft");
      $(".mission-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".mission-text").removeClass("fromRight");
    }
  });

  $(".gallery-list-item").click(function () {
    let value = $(this).attr("data-filter");
    switch (value) {
      case "all":
        $(".filter").show(300);
        break;
      case "new":
        $(".new").show(300);
        $(".filter")
          .not("." + value)
          .hide(300);
        break;
      case "free":
        $(".free").show(300);
        $(".filter")
          .not("." + value)
          .hide(300);
        break;
      case "pro":
        $(".pro").show(300);
        $(".filter")
          .not("." + value)
          .hide(300);
        break;
    }
  });

  $(".gallery-list-item").click(function () {
    $(this).addClass("active-item").siblings().removeClass("active-item");
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 4300) {
      $(".card-1").addClass("movefromLeft");
      $(".card-2").addClass("movefromBottom");
      $(".card-3").addClass("movefromRight");
    } else {
      $(".card-1").removeClass("movefromLeft");
      $(".card-2").removeClass("movefromBottom");
      $(".card-3").removeClass("movefromRight");
    }
  });
});
