$(function(){
	var user = $('.user').val();
	var pass = $('.pass').val();
	var pass1 = $('.pass1').val();
	var first = $('first').val();
	var last = $('.last').val();
	var mail = $('.mail').val();
	var address = $('.address').val();
	var age = $('.age').val();
	$('.user').change(function(){
		if (user == '') {
			$('.tb1').text('This field is required.')
		}
		else{
			$('.tb1').text('')
		}
	})
	$('.pass').change(function(){
		if (pass == '') {
			$('.tb2').text('This field is required.')
		}
		else{
			$('.tb2').text('')
		}
	})
	$('.pass1').change(function(){
		if (pass1 == '') {
			$('.tb3').text('This field is required.')
		}
		else{
			$('.tb3').text('')
		}
	})
	$('.first').change(function(){
		if (first == '') {
			$('.tb4').text('This field is required.')
		}
		else{
			$('.tb4').text('')
		}
	})
	$('.last').change(function(){
		if (last == '') {
			$('.tb5').text('This field is required.')
		}
		else{
			$('.tb5').text('')
		}
	})
	$('.mail').change(function(){
		if (mail == '') {
			$('.tb6').text('This field is required.')
		}
		else{
			$('.tb6').text('')
		}
	})
	$('.next').click(function(){
		if ($('ct1').css('display', 'block')) {
			$('.ct1').css('display','none')
			$('.ct2').css('display','block')
		}
		if ($('.ct2').css('display','block')) {
			$('.ct2').css('display','none')
			$('.ct3').css('display','block')
		}
		if ($('.ct3').css('display','block')) {
			$('.ct3').css('display','none')
			$('.ct4').css('display','block')
		}
		if ($('.ct4').css('display','block')) {
			alert('This is last tag.')
		}
	})

})