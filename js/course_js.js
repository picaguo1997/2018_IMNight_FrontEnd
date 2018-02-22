var resource = new Vue({
	el:'.main',
	data:{
		classes:[],
	},
	methods: {
		move: function(k) {
			k = String(k);
			/*initiate others*/
			for(var i = 1;i <= this.classes.length; i++){
				if(i == Number(k)){
					$('#card'+k).toggleClass('lift');
					$('#back'+k).toggleClass('transform-active');
				}else{
					$('#card'+String(i)).removeClass('lift');
					$('#back'+String(i)).removeClass('transform-active');
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
	$.ajax({
		url: 'http://127.0.0.1:8887/js/course.json',
		type: 'GET',
		success:function(data){
			for(var i = 0;i < data.length; i++){
				resource.classes.push(data[i]);
			}
		},
		error: function(data) {
			alert("fail"+data);
		}
	});
});
