$(function () {
  $(".menu a, .logo, .footer__img-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
  });
  $(".header__btn").on("click", function () {
    $(".menu").toggleClass("menu__active");
  });
  var mixer = mixitup(".gallery__content");
});
