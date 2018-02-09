var switchBool = new Vue({
	el:'.main',
	data:{
		checked:false,
		couponList:	//存用戶可用優惠券的資料
		{
			pizza:true,
			nuts:false,
			cloth:false,
			cake:true,
			cookie:true,
			frozen:false,
		},
	}
});

var card = new Vue({
	el:'#exampleModal',
	data:{
		title:'XX折價券',
		imgUrl:'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/06/i-1-sonic-burger.jpg',
		storeName:'SoFree柴燒披薩',
		couponInfo:'免費披薩一張',
		deadLine:'即日起至5/8前',
		show: true,
	}
})
