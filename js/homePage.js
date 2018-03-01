function fadeInImg(obj) {
	obj.animate({'opacity':'1'},1500);
}

function fadeInImgInit(obj) {
	// for fade in on seen
	$('.hideme').each(function() {
		let window_bot = $(window).scrollTop() + $(window).height();
		let obj_top = $(this).offset().top;
		if (window_bot > obj_top) {
            fadeInImg($(this));			
		}
	})
}

$(window).on('load', function() {
    // for lazy load
    // $('.lazy').lazy();

	$('#home-word').fadeIn(1000, 'swing', function() {
		$('#start').show("blind", 500, fadeInImgInit);
	});

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();

            if( bottom_of_window > top_of_object ){
                // $(this).animate({'opacity':'1'},1500);
                fadeInImg($(this));
            }
        }); 
    }); 
});

$('.enlarge').hover(
function(){
	$(this).addClass('transition');
}, 
function(){
	$(this).removeClass('transition');
});

// for smartphone click hover effect
$('#start').on('click', function() {
    if ($(window).width() <= 600) {
        setTimeout(function(){
            location.href = "template.html";
        }, 500); 
    }
    else {
        setTimeout(function(){
            location.href = "template.html";
        }, 500);
    }
});    

