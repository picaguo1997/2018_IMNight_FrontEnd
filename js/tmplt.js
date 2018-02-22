let prev_js = "";
let prev_css = "";

function load(page){
	$("div.container.main-content").load(page+".html #mainContext ");
}

function loadPage(page,callback){
	
	script_name = "../js/"+page+".js";
	css_name = "../css/"+page+".css";

	//remove previous page's html & js & css
	if( prev_js != "" & prev_css != "" ){
		$('script[src="'+ prev_js +'"]').remove();
		$('link[href="'+ prev_css +'"]').remove();
		$(".container .main-content").empty();
	}
	// callback(load(script_name,css_name));

	let script = document.createElement('script');
	script.src = script_name;
	document.head.appendChild(script);

	let css = document.createElement('link');
	css.rel="stylesheet";
	css.href= css_name;
	document.head.appendChild(css);
	prev_js = script_name;
	prev_css = css_name;

	$("div.container.main-content").load(page+".html #mainContext ");
	// if(callback){
	// 	callback(page);
	// }
};