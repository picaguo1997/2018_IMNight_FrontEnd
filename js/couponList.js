var resource = new Vue({
	el:'.main',
	data:{
		checked:false,
		coupons:[
		{
			num:1,
			name:'披薩集點卡',
			shop:'SoFree柴燒披薩',
			detail:'可兌換免費披薩一張',
			time:'即日起至5/8前',
			usable:true,
			imgUrl:'../img/sofree.jpg',
		},{
			num:2,
			name:'TIME立解班',
			shop:'OKE美語',
			detail:'免費試聽TIME立解課程一堂',
			time:'5/8至6月底',
			usable:false,
			imgUrl:'../img/okeLogo.jpg',
		},{
			num:3,
			name:'單字文法書',
			shop:'OKE美語',
			detail:'免費單字文法書一本',
			time:'5/8至6月底',
			usable:false,
			imgUrl:'../img/okeLogo.jpg',
		},{
			num:4,
			name:'免費披薩一張',
			shop:'SoFree柴燒披薩',
			detail:'免費單字文法書一本',
			time:'即日起至5/8前',
			usable:true,
			imgUrl:'../img/sofree.jpg',
		},{
			num:5,
			name:'免費披薩一張',
			shop:'SoFree柴燒披薩',
			detail:'免費單字文法書一本',
			time:'即日起至5/8前',
			usable:false,
			imgUrl:'../img/sofree.jpg',
		},{
			num:6,
			name:'免費披薩一張',
			shop:'SoFree柴燒披薩',
			detail:'免費單字文法書一本',
			time:'即日起至5/8前',
			usable:true,
			imgUrl:'../img/sofree.jpg',
		},
		]
	},
	methods:{
		delayShow:function(k){
			$('#back'+k).removeClass('hide');
			$('#front'+k).addClass('shrink');
			$('#modal-content'+k).addClass('changeBg');
		},
		dcheck:function(k){
			$('#back'+k).addClass('hide');
			$('#front'+k).removeClass('shrink');
			$('#modal-content'+k).removeClass('changeBg');
		},
		submit:function(k){
			this.coupons[k-1].usable = false;
			this.dcheck(k);
		},
		grow: function(k) {
			k = String(k);
			$('#orb'+k).toggleClass('showUp');
			$('#star'+k).toggleClass('rainbow');
			if($('#star'+k).hasClass('moveV')){
				$('#star'+k).addClass('moveback');
				$('#star'+k).removeClass('moveV');
			}else{
				$('#star'+k).removeClass('moveback');
				$('#star'+k).addClass('moveV');
			}
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