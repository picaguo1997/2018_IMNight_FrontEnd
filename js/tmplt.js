let prev_js = "";
let prev_css = "";

function loadPage(page,callback){
	script_name = "../js/"+page+".js";
	css_name = "../css/"+page+".css";

	if( ! (script_name == prev_js && css_name == prev_css) || prev_js == "../js/menuPage.js" ){
		// console.log(prev_js)
		
		//remove previous page's html & js & css
		$('script[src="'+ prev_js +'"]').remove();
		$('link[href="'+ prev_css +'"]').remove();
		$(".container .main-content").empty();

		// apply page.css
		var css = document.createElement('link');
		css.rel="stylesheet";
		css.href= css_name;
		document.head.appendChild(css);
		
		// load #mainContext of page.html
		$("div.container.main-content").load(page+".html #mainContext", function(){
			// load page.js
			$.getScript( script_name )
			  .done(function( script, textStatus ) {
			    // alert('Successfully loaded script');
			  })
			  .fail(function( jqxhr, settings, exception ) {
			    alert('Failed to load script');
			});

		});

		prev_js = script_name;
		prev_css = css_name;

	}
};


function link(page){
	$(".modal-backdrop.fade.show").remove();
	loadPage(page);
}

$(".nav-link-collapse").click( function(){
	let clpsd_title = $(this).parent().attr("title");
	let all_clp = $(".nav-link-collapse");
	all_title = []
	for( let i = 0 ; i < all_clp.length ; i++ ){
		let clp = $(all_clp[i]);
		let t = clp.parent().attr("title")
		if( t != clpsd_title ){
			if ( clp.attr("class").split(" ").indexOf("collapsed") == -1 ){
				clp.click();
			}
		}
	}
} );

$(document).ready(function(){
	$('.lazy').Lazy({
		effect: 'fadeIn',
		effectTime: 2000,
		threshold: 0,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
	});

	// loadPage('remindPage');
	loadPage('menuPage');
});