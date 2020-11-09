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
    console.log(position);
    if (position >= 600) {
      $(".camera-img").addClass("fromLeft");
      $(".mission-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".mission-text").removeClass("fromRight");
    }
  });
});
