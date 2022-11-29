//navbar

$('.hamburger').click(()=>{
    $('.nav_menu').toggleClass('active_nav_menu')
})

$(window).scroll(() => {
  if(this.scrollY > 0){
    $('.navbar').addClass('bg_dark');
  } else if (this.scrollY == 0) {
    $('.navbar').removeClass('bg_dark');
  }
})

//slick-slider
$('.banner_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });