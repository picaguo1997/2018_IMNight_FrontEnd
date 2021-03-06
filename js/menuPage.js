var login = false;
var cardDrawn = false;
var discountTaken = false;

// add enlarge hover effect on all .floating elements
function imgEnlarge() {
	setTimeout(function(){
		$('.floating').addClass('enlarge');
		$('.enlarge').hover(
		function(){
			$(this).css('cursor', 'pointer');
			// $(this).addClass('transition');
			$(this).css('transform', 'scale(1.1)');
			$(this).removeClass('floating');
		}, 
		function(){
			// $(this).removeClass('transition');
			$(this).addClass('floating');
		});
	}, 1000);
}

$(function(){

	$('.lazy').Lazy({
		effect: 'fadeIn',
		effectTime: 1000,
		threshold: 0,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
	});

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
			// alert('get login status fail!');
		}
	});

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
		});	
	}

	$('#rule-title').fadeTo(1000, 0.7, 'swing', function() {
		$('#rule-space').show("blind", 500);
	});

})

var login_modal = new Vue({
	el: '#loginModal',
	data: {
		message: '',
		loggedIn: login
	}
})

var remind_modal = new Vue({
	el: '#remindModal',
	data: {
		message: '',
		loggedIn: login,
		drawnCard: cardDrawn,
		takenDiscount: discountTaken
	}
})

if (login) {
	$('#loginModal').remove();
	$('#remindModal').modal('toggle');

	// get news info using ajax
	$.ajax({
		type: 'GET',
		url: 'some url',
		xhrFields: {
            withCredentials: true
        },
        success: function(data) {
        	// data will be a list of objects: {title, url}
			console.log(data);
			for (i = 0; i < data.length; i++) {
				let item = '<li class="pl-3"><a href=\"' + data[i].url + '\">' + data[i].title + '</a></li>';
				$('#news').append(item);
			}
		}
	});
}
else {
	$('#remindModal').remove();
	$('#loginModal').modal('toggle');
}

// add enlarge hover effect on all .floating elements
imgEnlarge();
