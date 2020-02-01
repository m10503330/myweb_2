$(document).ready(function(){
	//header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored")
		}
		else{
			$header.removeClass("header--colored")
		}
	})

	// wow plugin init

    new WOW().init();

    $(".js-input").focus(function()
    {
    	$(this).parent().find(".label-text").addClass("is-active");

    })
    $(".js-input").blur(function()
    {
    	if($(this).val().length == 0)
    	{
    		$(this).parent().find(".label-text").removeClass("is-active");
    	}
    })
              
})