var resource = new Vue({
	el:'.story',
	data:{
		stories:[
		{
			num:1,
			title:'最跳tone的教授',
			detail:'null 不可以念錯',
			imgUrl:'../img/bgRed.jpg',
			info:'1. 這是七位助教的其中一位，其他六位已經找好了，都是資管所碩一或碩二的學生，有意應徵的同學可以問我。<br />'+
				'2. 工作不算輕鬆：輪流週一早上跟課、週三或週四晚上帶實習、輪流週五開 office hour、分攤作業與考試測試資料設計，以及其他雜七雜八任務<br />'+
				'3. 待遇相當普通：一學期標準價 22500<br />',
		},{
			num:2,
			title:'100杯奶茶',
			detail:'管數要認真念喔:)',
			imgUrl:'../img/bg.jpg',
			info:'連連冠閔喔',
		},{
			num:3,
			title:'最認真的教授',
			detail:'三學分當七學分上',
			imgUrl:'../img/nutBg.jpg',
			info:'1. 這是七位助教的其中一位，其他六位已經找好了，都是資管所碩一或碩二的學生，有意應徵的同學可以問我。<br />'+
				'2. 工作不算輕鬆：輪流週一早上跟課、週三或週四晚上帶實習、輪流週五開 office hour、分攤作業與考試測試資料設計，以及其他雜七雜八任務<br />'+
				'3. 待遇相當普通：一學期標準價 22500<br />',
		},{
			num:4,
			title:'最跳tone的教授',
			detail:'null 不可以念錯',
			imgUrl:'../img/bgRed.jpg',
			info:'1. 這是七位助教的其中一位，其他六位已經找好了，都是資管所碩一或碩二的學生，有意應徵的同學可以問我。<br />'+
				'2. 工作不算輕鬆：輪流週一早上跟課、週三或週四晚上帶實習、輪流週五開 office hour、分攤作業與考試測試資料設計，以及其他雜七雜八任務<br />'+
				'3. 待遇相當普通：一學期標準價 22500<br />',
		},{
			num:5,
			title:'最跳tone的教授',
			detail:'null 不可以念錯',
			imgUrl:'../img/nutBg.jpg',
			info:'1. 這是七位助教的其中一位，其他六位已經找好了，都是資管所碩一或碩二的學生，有意應徵的同學可以問我。<br />'+
				'2. 工作不算輕鬆：輪流週一早上跟課、週三或週四晚上帶實習、輪流週五開 office hour、分攤作業與考試測試資料設計，以及其他雜七雜八任務<br />'+
				'3. 待遇相當普通：一學期標準價 22500<br />',
		},
		]
	},methods:{
		crack:function(k){
			/* need to add 1 point*/
			k = String(k);
			$('#egg'+k).addClass('hide');
			
			$('#eggDown'+k).removeClass('hide');
			$('#eggDown'+k).addClass('downAnimate');
			
			$('#eggUp'+k).removeClass('hide');
			$('#eggUp'+k).addClass('upAnimate');
		}
	}
})

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
