$(document).ready(function() {
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
			alert("Спасибо за заявку!");
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




