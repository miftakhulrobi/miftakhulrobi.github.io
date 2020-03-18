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
    $(".produk .container .row .col-lg-12 ul li").each(function(i) {
      setTimeout(() => {
        $(".produk .container .row .col-lg-12 ul li")
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
    $(".hubungi-kami .container .col-hk").addClass("show");
  }
});

// ! Hand

$(".nav-link").click(function() {
  $(".nav-link").removeClass("aktif");
  $(this).addClass("aktif");
});

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

$(".produk .container a").click(function() {
  const p = $(this)
    .attr("href")
    .replace("#", "");

  goOverlay(p);

  $(".next").click(function() {
    const ov = $(".overlay").attr("id");
    const n = ov.replace("p", "");
    const number = parseInt(n) + 1;
    goOverlay("p" + goNumb(number));
  });

  $(".prev").click(function() {
    const ov = $(".overlay").attr("id");
    const n = ov.replace("p", "");
    const number = parseInt(n) - 1;
    goOverlay("p" + goNumb(number));
  });
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

function goOverlay(p) {
  $(".overlay").attr("id", p);
  $(".overlay img").attr("src", "assets/img/produk/" + p + ".png");
}

function goNumb(numb) {
  if (numb === 14) {
    return parseInt(1);
  } else if (numb === 0) {
    return parseInt(13);
  } else {
    return parseInt(numb);
  }
}

// ! IMg multiple slider
(function($) {
  $(function() {
    var jcarousel = $(".produk .container .row .col-lg-12");

    jcarousel
      .on("jcarousel:reload jcarousel:create", function() {
        var carousel = $(this),
          width = carousel.innerWidth();

        if (width >= 600) {
          width = width / 4;
        }

        carousel.jcarousel("items").css("width", Math.ceil(width) + "px");
      })
      .jcarousel({
        wrap: "circular"
      });

    $("a.left.carousel-control").jcarouselControl({
      target: "-=1"
    });

    $("a.right.carousel-control").jcarouselControl({
      target: "+=1"
    });

    $(".jcarousel-pagination")
      .on("jcarouselpagination:active", "a", function() {
        $(this).addClass("active");
      })
      .on("jcarouselpagination:inactive", "a", function() {
        $(this).removeClass("active");
      })
      .on("click", function(e) {
        e.preventDefault();
      })
      .jcarouselPagination({
        perPage: 1,
        item: function(page) {
          return '<a href="#' + page + '">' + page + "</a>";
        }
      });
  });
})(jQuery);
