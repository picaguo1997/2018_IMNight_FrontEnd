let login = false;
let cardDrawn = false;
let discountTaken = false;

$(function(){
	//post for log in
	// $.ajax({
	// 	type: 'POST',
	// 	url: 'http://140.112.106.45:8000/accounts/login/',
	// 	data: {"password":"testimnight","username":"test123"},
	// 	success:function(data) {
	// 		console.log(data);
	// 	}
	// })

	// check if the user has logged in
	$.ajax({
		type: 'GET',
		url: 'http://140.112.106.45:8000/accounts/check/login/',
		xhrFields: {
            withCredentials: true
        },
        success: function(data) {
			console.log(data);
			login = data.auth_status;
		},
		error: function() {
			alert('fuck');
		}
	})

	// if the user has logged in, check if he has drawn card or taken discount
	if (login == true) {
		$.ajax({
			type: 'GET',
			url: 'http://140.112.106.45:8000/accounts/check/daily',
			xhrFields: {
	            withCredentials: true
	        },
	        success: function(data) {
				console.log(data);
				cardDrawn = data.performer_drawn;
				discountTaken = data.voucher_drawn;
			}
		})		
	}

})

let login_modal = new Vue({
	el: '#loginModal',
	data: {
		message: '',
		loggedIn: login
	}
})

let remind_modal = new Vue({
	el: '#remindModal',
	data: {
		message: '',
		loggedIn: login,
		drawnCard: cardDrawn,
		takenDiscount: discountTaken
	}
})

if (login) {
	$('#remindModal').modal('toggle');
}
else {
	$('#loginModal').modal('toggle');
}

$('.enlarge').hover(
function(){
	$(this).css('cursor', 'pointer');
	$(this).addClass('transition');
}, 
function(){
	$(this).removeClass('transition');
});
