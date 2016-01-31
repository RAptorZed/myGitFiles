$(document).ready(function() {



	//jq plagin - mmenu
      $("#my-menu").mmenu({
         counters: true
      });


   //slider section 1
      $("#owl-example").owlCarousel({
      	items: 1,
      	itemsDesktop:false,
      	itemsDesktopSmall:[979,1],
      	itemsTablet:[768,1],
      	itemsMobile :[479,1],
      	autoPlay:  5000,
      	searchfield: true,
      	slideSpeed : 0,
    	paginationSpeed : 0,
    	rewindSpeed : 0,
      	stopOnHover: true,
      	paginationSpeed:0,
      	navigationText:	['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
      	navigation: true,
      	});



    //slider section 2
		$('.multiple-items').slick({
			prevArrow:'<button type="button" class="My-slick-prew"><i class="fa fa-chevron-left fa-2x"></i></button>',
			nextArrow:'<button type="button" class="My-slick-next"><i class="fa fa-chevron-right fa-2x"></i></button>',
		  dots: false,
		  infinite: true,
		  speed: 300,
		  arrows:true,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  responsive: [
		  	{
		      breakpoint: 1100,
		      settings: {
				arrows:false 	
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: false,
		        arrows:false
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        arrows:false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows:false
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
});




