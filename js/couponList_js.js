var resource = new Vue({
	el:'.main',
	data:{
		checked:false,
		coupons:[],
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
		}
	}
});

$(function(){
	$.ajax({
		url: 'http://127.0.0.1:8887/js/coupon.json',
		type: 'GET',
		success:function(data){
			for(var i = 0;i < data.length; i++){
				resource.coupons.push(data[i]);
			}
		},
		error: function(data) {
			alert("fail"+typeof(data));
		}
	});
});

