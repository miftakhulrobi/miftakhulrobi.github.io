$(window).on("load", function() {
  $(".jumbotron a").addClass("show");
  setTimeout(() => {
    $(".jumbotron p").addClass("show");
  }, 250);
  setTimeout(() => {
    $(".jumbotron h1").addClass("show");
  }, 500);
});

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  if (wScroll > $(".tentang-kami").offset().top - 400) {
    $(".to-top").addClass("show");
  } else {
    $(".to-top").removeClass("show");
  }

  if (wScroll > $(".tentang-kami").offset().top - 50) {
    $(".tentang-kami .container .col-md-6").addClass("show");
  }

  if (wScroll > $(".produk").offset().top - 250) {
    $(".produk .container .col-md-3").each(function(i) {
      setTimeout(() => {
        $(".produk .container .col-md-3")
          .eq(i)
          .addClass("show");
      }, 300 * i);
    });
  }

  if (wScroll > $(".produk-jasa").offset().top - 200) {
    $(".produk-jasa .container .col-md-6").addClass("show");
  }

  if (wScroll > $(".partner").offset().top - 250) {
    $(".partner .container .col").each(function(i) {
      setTimeout(() => {
        $(".partner .container .col")
          .eq(i)
          .addClass("show");
      }, 300 * i);
    });
  }

  if (wScroll > $(".hubungi-kami").offset().top - 250) {
    $(".hubungi-kami .container .col-md-6.col-hk").addClass("show");
  }
});

// ! Hand

$('.nav-link[href="#tentang-kami"]').click(function(e) {
  e.preventDefault();
  goElement(".tentang-kami");
});

$('.nav-link[href="#tentang-kami"]').click(function(e) {
  e.preventDefault();
  goElement(".tentang-kami");
});

$('.nav-link[href="#produk"]').click(function(e) {
  e.preventDefault();
  goElement(".produk");
});

$('.nav-link[href="#jasa"]').click(function(e) {
  e.preventDefault();
  goElement(".jasa");
});

$('.nav-link[href="#partner"]').click(function(e) {
  e.preventDefault();
  goElement(".partner");
});

$('.nav-link[href="#hubungi-kami"]').click(function(e) {
  e.preventDefault();
  goElement(".hubungi-kami");
});

$(".to-top").on("click", function(event) {
  event.preventDefault();
  goElement(".navbar");
});

$(".overlay .close").on("click", function() {
  $("html,body").animate(
    {
      scrollTop: $(".produk").offset().top
    },
    500
  );
});

// Fnc
function goElement(element) {
  $("html,body").animate(
    {
      scrollTop: $(element).offset().top
    },
    500
  );
}
