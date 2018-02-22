let login = false;
let cardDrawn = false;
let discountTaken = false;

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