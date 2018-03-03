var people = new Vue({
	el: "#IM_people",
	data: {
		people:
			[
				{
					title:"副召",
					name:"林雨新",
					work:"？？？",
					intro:"人稱火焰飆仔，指考數學5x",
					img:"https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/15740995_1398054983562621_5725420909575048254_n.jpg?_nc_fx=ftpe7-4&oh=f1252eded9cd025e39f6b3b1db87cf64&oe=5B1EC0C3"
				},
				{
					title:"副召",
					name:"林雨新",
					work:"？？？",
					intro:"人稱火焰飆仔，指考數學5x",
					img:"https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/15740995_1398054983562621_5725420909575048254_n.jpg?_nc_fx=ftpe7-4&oh=f1252eded9cd025e39f6b3b1db87cf64&oe=5B1EC0C3"
				},
				{
					title:"副召",
					name:"林雨新",
					work:"？？？",
					intro:"人稱火焰飆仔，指考數學5x",
					img:"https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/15740995_1398054983562621_5725420909575048254_n.jpg?_nc_fx=ftpe7-4&oh=f1252eded9cd025e39f6b3b1db87cf64&oe=5B1EC0C3"
				}
			]
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