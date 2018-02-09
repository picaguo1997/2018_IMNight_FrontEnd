var pizzaName = new Vue({
	el:"#list-pizza-list",
	data:{
		imgURL:'../img/pizza_logo.png',
		styleObject:'marginRight:1vw;float:left;width:7vw;',
	}
});

var pizza = new Vue({
	el:"#list-pizza",
	data:{
		imgURL:'../img/sofree.jpg',
		styleObject:'max-width:60vw;align-items: center;',
		text:'So Free 的每片Pizza皆為天然發酵的健康全麥麵糰 用心揉捏桿製黃金薄度<br />'+
		'使用多種蔬果熬製而成的健康番茄醬<br />'+
		'或是由新鮮羅勒葉和重本橄欖油及松子調製而成的美味羅勒青醬<br />'+
		'再撒上新鮮又美味的手作食材<br />'+
		'鋪上誠意十足滿滿的拉絲切達起司<br />'+
		'最後送入傳統磚窯中以龍眼木與炭火仔細烘烤<br />'+
		'一片片金黃酥鬆薄脆 香噴噴的美味Pizza 徹底滿足您的每寸味蕾啊～<br />',
		hashtag:'#sofreepizza #柴燒窯烤Pizza #woodfiredpizza #woodfireoven',
	}
});

var nutName = new Vue({
	el:"#list-nuts-list",
	data:{
		imgURL:'https://thumb1.shutterstock.com/display_pic_with_logo/3206762/284953976/stock-vector-acorn-nut-vector-icon-stock-vector-284953976.jpg',
		styleObject:'marginRight:1vw;float:left;width:7vw;',
	}
});

var nuts = new Vue({
	el:'#list-nuts',
	data:{
		imgURL:'https://s3.amazonaws.com/southfloridareporter/wp-content/uploads/2016/10/21235613/nut-day1-e1444913702778-808x378.jpg',
		styleObject:'max-width:60vw;align-items: center;',
		text:'「團圓堅果的豆子吃起來是一種天然樸實的酥脆感，重香氣是它的特色，不單是聞的，吃的時候更是感受得到。」<br />'+
		'團圓堅果的豆子每粒都飽滿有光澤，不會有乾癟瘦弱的豆子，真的讓人好吃到會忍不住一直吃，這是抹抹近期吃過最好吃的堅果了！這才知道原來堅果無調味比調味過的還要好吃。',
	}
})

var hoddieName = new Vue({
	el:"#list-cloth-list",
	data:{
		imgURL:'https://ntugift.colaz.com.tw/image/cache/catalog/NTU/product/Product_A/ntu-ct-05-rd-4-1-1-800x800.jpg',
		styleObject:'marginRight:1vw;float:left;width:7vw;',
	}
});

var hoddie = new Vue({
	el:'#list-cloth',
	data:{
		imgURL:'https://fsp.youthwant.com/images/580_1298477853503274.jpg',
		styleObject:'max-width:60vw;align-items: center;',
		text:'今天，我們跨出了第一步。<br />'+
		'進駐台大校園內椰林小舖囉！這是我們第一家實品展售店，真是非常的興奮喔<br / >'+
		'在這藍色小屋中，裡面有濃濃的咖啡香及許多台灣大學的授權商品。當然最重要的有「小日子手作提袋」及「好青春手作筆袋」可供現場選購，歡迎大家來台大校園逛逛時，別忘了到椰林小舖喝杯滴咖啡，並體驗可水洗牛皮紙的迷人魅力喔!',
	}
});

