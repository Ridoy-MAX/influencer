







$(document).ready(function(){ 
      //slider start;
      $('.banner-slider-team').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
        // prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        prevArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    
        });
//slider start;
});     













