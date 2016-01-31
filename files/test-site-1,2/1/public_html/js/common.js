$(document).ready(function() {


	//fixed head menu
            $(window).scroll(function(){
                if ($(this).scrollTop() > 20) {
                    $(".menu").css("position","fixed").fadeIn('fast');
					$(".menu ul li:nth-child(5)").css("display","inline-block").fadeIn('fast');
                } else {
                    $(".menu").css("position","relative").fadeIn('fast');
                    if ($(this).scrollTop() < 20) {
                   		$(".menu ul li:nth-child(5)").css("display","none");
                	}
                };
            });


    //niceScroll
	        $(document).ready(
	            function() {
	                $("html").niceScroll({
	                    cursorcolor: '#EA5C6B',
	                    cursoropacitymin: '0.0',
	                    cursoropacitymax: '0.8',
	                    cursorwidth: '6',
	                    zindex: '99999',
	                    cursorborder: '1px solid #D44454'
	                });
	            }
	        );


	//ScrolHrefs
	        $(document).ready(function(){
            $('a[href^="#"]').click(function () { 
                elementClick = $(this).attr("href");
                destination = $(elementClick).offset().top;
                if($.browser.safari){
                $('body').animate( { scrollTop: destination }, 1000 );
                } else {
                    $('html').animate( { scrollTop: destination -50}, 1000 );
                }
                return false;
           });
        });    


	//slider
			$(".slider").owlCarousel({
				items : 1,
				nav : true,
				navText : "",
				autoplay : true,
				autoplayHoverPause : true,
				fluidSpeed : 600,
				autoplaySpeed : 600,
				navSpeed : 600,
				dotsSpeed : 600,
				dragEndSpeed : 600
			});	    


	//animation_section_1
	$(".animate_s1").animated("fadeInLeft");
    //animation_section_2
    $(".header_boot_s2 h1,.header_boot_s2 h2 ").animated("fadeInLeft");
	//animation_section_3
			var waypointsvg = new Waypoint({
				element: $(".animate_s3"),
				handler: function(dir) {	
					if (dir === "down") {
						$(".section_3 .s3_item_bg").each(function(index) {
							var ths = $(this);
							setTimeout(function() {
								var myAnimation = new DrawFillSVG({
									elementId: "s3_item_swg-"+ index
								});
							}, 500*index);
						});
					};
					this.destroy();
				},
				offset: '35%'
			});	
	//animation_section_4
	$(".animation_s_4").animated("fadeInLeft");		
    //animation_section_5
    $(".animation_s_5a").animated("fadeInLeft");
    $(".animation_s_5b").animated("fadeInRight");



	//form: open,close form
	$(".open_form").on("click", (function() {
			document.getElementById('envelope').style.display='block';
			document.getElementById('fade').style.display='block';
			}));
	$(".close_form").on("click", (function() {
			document.getElementById('envelope').style.display='none';
			document.getElementById('fade').style.display='none';
			}));

	
	//Цели для Яндекс.Метрики и Google Analytics
			$(".count_element").on("click", (function() {
				ga("send", "event", "goal", "goal");
				yaCounterXXXXXXXX.reachGoal("goal");
				return true;
			}));
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            setTimeout(function() {
                $("#fork_ok").css("display", "block");
            }, 100);
            setTimeout(function() {
                $("#fork_ok").css("display", "none");
                document.getElementById('fade').style.display = 'none'
                document.getElementById('envelope').style.display = 'none';
            }, 3000);
            setTimeout(function() {
                $("#form").trigger("reset");
            }, 1000);
        });
        return false;
    });
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});




