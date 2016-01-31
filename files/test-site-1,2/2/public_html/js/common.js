$(document).ready(function() {
	//section 3
		//plitka
		$("#portfolio_grid").mixItUp();
		//section 3 portfolio
		$(".s_portfolio li").click(function(){
			$(".s_portfolio li").removeClass("active");
			$(this).addClass("active");
		});

		//popup
		$(".popup_content").magnificPopup({
			type:"inline",
			midClick:true
		});
		//rozdayom id dla items
		$(".portfolio_item").each(function(i){
			$(this).find("a").attr("href", "#worck_" + i);
			$(this).find(".podrt_descr").attr("id", "worck_" + i);
		});


	//section 0	
		//paralax header
		function heidhtDetect(){
			$(".main_head").css("height", $(window).height());
		};
			heidhtDetect();
		$(window).resize(function(){
			heidhtDetect();
		});
		
		//button mnu
		$(".toogle_mnu").click(function() {
	  	$(".sandwich").toggleClass("active");
		});

		//при нажатии - меню прячется
		$(".top_mnu li a").click(function(){
			$(".top_mnu").fadeOut(600);//hiden, visible
			$(".sandwich").toggleClass("active");
			$(".top_text").removeClass("h_opacify");
		});

		// появления формы с анимацией
		$(".toogle_mnu").click(function() {
	  		if($(".top_mnu").is(":visible")){
	  			$(".top_text").removeClass("h_opacify");
	  			$(".top_mnu").fadeOut(600);//hiden, visible
	  			$(".top_mnu li a").removeClass("fadeInUp animated")//effect
	  		} else{
	  			$(".top_text").addClass("h_opacify");
	  			$(".top_mnu").fadeIn(600);//hiden, visible
	  			$(".top_mnu li a").addClass("fadeInUp animated")//effect
	  		}
		});




		//animate header 0
		$(".top_text h1").animated("fadeInDown","fadeOutUp");
		$(".top_text p").animated("fadeInUp","fadeOutDown");
		//animate section 0
		$(".section_header").animated("fadeInUp","fadeOutDown");

		//animate section 1
		$(".animation_center").animated("flipInY","flipOutY");
		$(".animation_left").animated("fadeInLeft","fadeOutRight");
		$(".animation_right").animated("fadeInRight","fadeOutleft");
		//popup to image (увеличение картинок при нажати)
		$(".popup").magnificPopup({type:"image"});

		// animate sectiom 2
		$(".left .resume_item").animated("fadeInLeft","fadeOutDown");
		$(".right .resume_item").animated("fadeInRight","fadeOutDown");

		//validator-form
		$("input, select, textarea").jqBootstrapValidation();
		//scroling to id
		$(".top_mnu ul a").mPageScroll2id();
});











