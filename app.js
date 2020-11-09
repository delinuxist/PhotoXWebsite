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
});
