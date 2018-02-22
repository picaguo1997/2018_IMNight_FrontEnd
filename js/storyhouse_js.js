var resource = new Vue({
	el:'.story',
	data:{
		stories:[]
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
	$.ajax({
		url: 'http://127.0.0.1:8887/js/story.json',
		type: 'GET',
		success:function(data){
			for(var i = 0;i < data.length; i++){
				resource.stories.push(data[i]);
			}
		},
		error: function(data) {
			alert("fail"+data);
		}
	});
});