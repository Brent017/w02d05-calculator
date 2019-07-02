let num1 = [];
let num2 = [];
let operator = "";

const equation = (x, y, str) => {
	if(str == '*') {
		return x * y;
	} else if (str == '+') {
		return parseFloat(x) + parseFloat(y);
	} else if (str == '-') {
		return x - y;
	} else if (str == '/') {
		return x / y;
	}
};


$('.number').on('click', (e) => {
	$('.screen').append($(e.target).text());
});

$('#decimal').on('click', (e) => {
	$('.screen').append($(e.target).text());
})

$('.operator').on('click', (e) => {
	$(e.target).css('background-color', 'red')
	num1 = $('.screen').text();
	operator = $(e.target).text();
	$('.screen').empty();
});

$('#equals').on('click', () => {
	num2 = $('.screen').text();
	$('.screen').empty();
	$('.screen').append((equation(num1, num2, operator)));
	num1 = $('.screen').text();
	$('.operator').css('background-color', '#46c9f5')
})


$('#clear').on('click', () => {
	$('.screen').empty();
	num1 = [];
	num2 = [];
	operator = "";
});

