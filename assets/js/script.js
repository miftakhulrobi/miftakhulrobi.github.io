$(window).on("load", function() {
  $(".jumbotron h1").addClass("show");
  $(".jumbotron p").addClass("show");
  $(".jumbotron a").addClass("show");
});

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll > $("#produk").offset().top - 200) {
    $(".navbar").addClass("sticky-top");
  }
  if (wScroll > $("div.home-jasa .row-jasa .col-md-6").offset().top - 350) {
    $("div.home-jasa .row-jasa .col-md-6").addClass("show");
  }
  if (
    wScroll >
    $("div.custom-jasa .row-custom-jasa .col-md-5").offset().top - 350
  ) {
    $("div.custom-jasa .row-custom-jasa .col-md-5").addClass("show");
  }
  if (wScroll > $(".partner").offset().top - 350) {
    $(".partner .row-partner .col-lg-3").each(function(i) {
      setTimeout(() => {
        $(".partner .row-partner .col-lg-3")
          .eq(i)
          .addClass("show");
      }, 300 * i);
    });
  }
});

// Hand
$(".nav-link").click(function() {
  const el = $(this).attr("href");
  goElement(el);
});

$(".a-produk").click(function() {
  const img = $(this).attr("href");
  addAttr(img);
});

$(".close").click(function() {
  const img = $(this).attr("data-img");
  goElement(img);
});

$(".nav-up").click(function() {
  goElement("#home");
});

// Fnc
function addAttr(img) {
  $(".close").attr("data-img", img);
}

function goElement(el) {
  $("html,body").animate(
    {
      scrollTop: $(el).offset().top
    },
    500
  );
  return false;
}
