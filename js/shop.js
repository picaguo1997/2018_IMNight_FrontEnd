$(document).ready(function(){   

    var $window = $(window);

    // Function to handle changes to style classes based on window width
    function checkWidth() {
        if ($window.width() < 600) {
			if($('#detail').hasClass('col-8')){
				$('#detail').removeClass('col-8').addClass('col-9');
			}
        };

        if ($window.width() >= 600){
			if($('#detail').hasClass('col-9')){
				$('#detail').removeClass('col-9').addClass('col-8');
			}
        }
    }

    // Execute on load
    checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);
});

function changeCss(){
	
}

var resource = new Vue({
	el:'#mainContext',
	data:{
		shops:[
			{
				num:1,
				name:'SoFree',
				logo:'../img/pizza_logo.png',
				detail:'新生南路店',
				info:'So Free 的每片Pizza皆為天然發酵的健康全麥麵糰 用心揉捏桿製黃金薄度<br />'+
					'使用多種蔬果熬製而成的健康番茄醬<br />'+
					'或是由新鮮羅勒葉和重本橄欖油及松子調製而成的美味羅勒青醬<br />'+
					'再撒上新鮮又美味的手作食材<br />'+
					'鋪上誠意十足滿滿的拉絲切達起司<br />'+
					'最後送入傳統磚窯中以龍眼木與炭火仔細烘烤<br />'+
					'一片片金黃酥鬆薄脆 香噴噴的美味Pizza 徹底滿足您的每寸味蕾啊～<br />',
				fbPage:"https://www.facebook.com/SoFreePizza/",
			},{
				num:2,
				name:'團圓堅果',
				logo:'../img/nutsLogo.jpg',
				detail:'電子商務',
				info:'「團圓堅果的豆子吃起來是一種天然樸實的酥脆感，重香氣是它的特色，不單是聞的，吃的時候更是感受得到。」<br />'+
					'團圓堅果的豆子每粒都飽滿有光澤，不會有乾癟瘦弱的豆子，真的讓人好吃到會忍不住一直吃，這是抹抹近期吃過最好吃的堅果了！這才知道原來堅果無調味比調味過的還要好吃。',
				fbPage:"https://www.facebook.com/tuanyuannuts/",
			},{
				num:3,
				name:'椰林小舖',
				logo:'../img/egg.png',
				detail:'大一女前面',
				info:'今天，我們跨出了第一步。<br />'+
					'進駐台大校園內椰林小舖囉！這是我們第一家實品展售店，真是非常的興奮喔<br / >'+
					'在這藍色小屋中，裡面有濃濃的咖啡香及許多台灣大學的授權商品。當然最重要的有「小日子手作提袋」及「好青春手作筆袋」可供現場選購，歡迎大家來台大校園逛逛時，別忘了到椰林小舖喝杯滴咖啡，並體驗可水洗牛皮紙的迷人魅力喔!',
				fbPage:"https://www.facebook.com/yelincabins/",
			},{
				num:4,
				name:'OKE',
				logo:'../img/okeLogo.jpg',
				detail:'大一女前面',
				info:'今天，我們跨出了第一步。<br />'+
					'進駐台大校園內椰林小舖囉！這是我們第一家實品展售店，真是非常的興奮喔<br / >'+
					'在這藍色小屋中，裡面有濃濃的咖啡香及許多台灣大學的授權商品。當然最重要的有「小日子手作提袋」及「好青春手作筆袋」可供現場選購，歡迎大家來台大校園逛逛時，別忘了到椰林小舖喝杯滴咖啡，並體驗可水洗牛皮紙的迷人魅力喔!',
				fbPage:"https://www.facebook.com/OKEStudy/",
			},
		]
	},
	methods:{
		swap:function(k){
			$('#img-'+k).toggleClass('hideImg');
			$('#des-'+k).toggleClass('hidescript');
			for(var i = 1;i <= this.shops.length; i++){
				if(i != k){
					if($('#img-'+k).hasClass('hideImg')){
						$('#img-'+i).removeClass('hideImg');
						$('#des-'+i).addClass('hidescript');
					}else{
						$('#img-'+i).addClass('hideImg');
						$('#des-'+i).removeClass('hidescript');
					}
				}
			}
		},
		changeCss:function(k){
			for(var i = 1;i <= this.shops.length; i++){
				if(i == k){
					$("#Img-"+i).toggleClass('movex');
					$("#Des-"+i).toggleClass('moveLeft');
					$("#DesDe-"+i).toggleClass('show');
				}else{
					$("#Img-"+i).removeClass('movex');
					$("#Des-"+i).removeClass('moveLeft');
					$("#DesDe-"+i).removeClass('show');
				}
			}
		}
	}
});

$(function(){
	$('.lazy').Lazy({
		effect: 'fadeIn',
		effectTime: 1000,
		threshold: 0,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
	});	
})