var shows = new Vue({
	el: "#show-list",
	data: {
		shows: [
			{ name:"2018IMnight", img: "../img/cover.jpg",intro: "1This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "2This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "3This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "4This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "5This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "5This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "5This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "5This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "5This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
			{ name:"2018IMNight", img: "../img/cover.jpg",intro: "5This is the 2018 IM Night LoGo.Hope you enjoy the show!",mbs:["2018之夜全體工作人員","還有你"] },
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