let prev_js = "";
let prev_css = "";

function loadPage(page,callback){
	script_name = "../js/"+page+".js";
	css_name = "../css/"+page+".css";

	if( ! (script_name == prev_js && css_name == prev_css) ){
		// console.log(prev_js)
		
		//remove previous page's html & js & css
		$('script[src="'+ prev_js +'"]').remove();
		$('link[href="'+ prev_css +'"]').remove();
		$(".container .main-content").empty();
		
		$("div.container.main-content").load(page+".html #mainContext", function(){
			$.getScript( script_name )
			  .done(function( script, textStatus ) {
			    // alert('Successfully loaded script');
			  })
			  .fail(function( jqxhr, settings, exception ) {
			    alert('Failed to load script');
			});

		});

		var css = document.createElement('link');
		css.rel="stylesheet";
		css.href= css_name;
		document.head.appendChild(css);
		prev_js = script_name;
		prev_css = css_name;

		// if(callback){
		// 	callback();
		// }

	}
};


function link(page){
	$(".modal-backdrop.fade.show").remove();
	loadPage(page);
}

$(document).ready(function(){
		loadPage('remindPage');
	}
);