
$(document).ready(function(){
    $('.our-tour-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slide-arrow prevB fas fa-angle-left"></button>',
        nextArrow: '<button class="slide-arrow nextB fas fa-angle-right"></button>',
        dots: false,
        dotsClass: 'slickNums',
        infinite: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
  });

  /***navbar fixed **/
$(window).scroll(function(){
    if($(window).scrollTop() > 10) {
        $(".navbar").addClass("fixed");
    } else {
      $(".navbar").removeClass("fixed");
    }
  });
  
  /** fin navar fixed ****/

  try{
    var myDatePicker = MCDatepicker.create({
          el: '#datepicker'
    })
  }catch {
  
  }