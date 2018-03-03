

var resource = new Vue({
	el:'.main',
	data:{
		classes:[
			{
				num:1,
				name:'程式設計',
				teacher:'小傑',
				more:"大一必修",
				imgUrl:'https://datasciencebe.files.wordpress.com/2015/01/coursera.png',
				Info:"想當初就是這樣一路辛苦學會程式的啊！但現在回頭一看，一切都是值得的！",
			},{
				num:2,
				name:'資料結構',
				teacher:'坤叔',
				more:"考古課",
				imgUrl:'../img/bgRed.jpg',
				Info:"blablabla",
			},{
				num:3,
				name:'統計',
				teacher:'小阿姨',
				more:"很重",
				imgUrl:'../img/bgRed.jpg',
				Info:"to be continue",
			},{
				num:4,
				name:'網路',
				teacher:'松哥',
				more:"大三必修",
				imgUrl:'../img/bgRed.jpg',
				Info:"to be continue",
			}
		]
	},
	methods: {
		move: function(k) {
			k = String(k);
			/*initiate others*/
			for(var i = 1;i <= this.classes.length; i++){
				if(i == Number(k)){
					$('#card'+k).toggleClass('lift');
					$('#back'+k).toggleClass('transform-active');
					$('#cb'+k).toggleClass('moveRight');
				}else{
					$('#card'+String(i)).removeClass('lift');
					$('#back'+String(i)).removeClass('transform-active');
					$('#cb'+String(i)).removeClass('moveRight');
				}
			}		
		},
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
