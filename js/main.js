(function ($) {
  "use strict";

  /*--------------------------
preloader
---------------------------- */

  $(window).on("load", function () {
    var pre_loader = $("#preloader");
    pre_loader.fadeOut("slow", function () {
      $(this).remove();
    });
  });

  /*---------------------
 TOP Menu Stick
--------------------- */

  var windows = $(window);
  var sticky = $("#sticker");

  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /*----------------------------
 jQuery MeanMenu
------------------------------ */

  var mean_menu = $("nav#dropdown");
  mean_menu.meanmenu();

  /*---------------------
 wow .js
--------------------- */
  function wowAnimation() {
    new WOW({
      offset: 100,
      mobile: true,
    }).init();
  }
  wowAnimation();

  /*--------------------------
 scrollUp
---------------------------- */

  $.scrollUp({
    scrollText: '<i class="ti-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  /*--------------------------
 collapse
---------------------------- */

  var panel_test = $(".panel-heading a");
  panel_test.on("click", function () {
    panel_test.removeClass("active");
    $(this).addClass("active");
  });
  /*--------------------------
 Parallax
---------------------------- */
  var parallaxeffect = $(window);
  parallaxeffect.stellar({
    responsive: true,
    positionProperty: "position",
    horizontalScrolling: false,
  });

  /*--------------------------
 MagnificPopup
---------------------------- */

  $(".video-play").magnificPopup({
    type: "iframe",
  });

  /*--------------------------
     slider carousel
---------------------------- */
  var intro_carousel = $(".intro-carousel");
  intro_carousel.owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    dots: false,
    navText: [
      "<i class='ti-angle-left'></i>",
      "<i class='ti-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*---------------------
 Testimonial carousel
---------------------*/

  var review = $(".testimonial-carousel");
  review.owlCarousel({
    loop: true,
    nav: false,
    margin: 40,
    dots: true,
    center: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  /*----------------------------
/*---------------------
 Services carousel
---------------------*/

  var review = $(".services-carousel");
  review.owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  var review = $(".astrologer-carousel");
  review.owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });
  var review = $(".astromall-carousel");
  review.owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });

  /*----------------------------
    Contact form
------------------------------ */
  $("#contactForm").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      formError();
      submitMSG(false, "Did you fill in the form properly?");
    } else {
      event.preventDefault();
      submitForm();
    }
  });
  function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();

    $.ajax({
      type: "POST",
      url: "assets/contact.php",
      data:
        "name=" +
        name +
        "&email=" +
        email +
        "&msg_subject=" +
        msg_subject +
        "&message=" +
        message,
      success: function (text) {
        if (text === "success") {
          formSuccess();
        } else {
          formError();
          submitMSG(false, text);
        }
      },
    });
  }

  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
  }

  function formError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }

  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-center tada animated text-success";
    } else {
      var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }
})(jQuery);
