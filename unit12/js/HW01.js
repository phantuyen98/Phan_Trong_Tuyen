$(function(){
	
	var address = $('#address').val();
	var age = $('#age').val();
	$('.next1').click(function(){
		var user = $('#user').val().trim();
		var pass = $('#pass').val().trim();
		var pass1 = $('#pass1').val().trim();
		// if (user == '' || pass == ''|| pass1 == ''){
		// 	alert('Bạn phải nhập đầy đủ các thông tin trên.')
		// }
		if(user == ''){
			$('.tb1').text('Bạn không dược bỏ trống mục này.')
		}
		else if(pass == ''){
			$('.tb2').text('Bạn không dược bỏ trống mục này.')
		}
		else if(pass1 == ''){
			$('.tb3').text('Bạn không dược bỏ trống mục này.')
		}
		else if(pass1 != '' && pass1 != pass){
			$('.tb3').text('Mật khẩu bạn điền không trùng khớp.')
		}

		else{
			$('.ct1').css('display','none')
			$('.ct2').css('display','block')
		}
	})
	$('.next2').click(function(){
		var first = $('#first').val();
		var last = $('#last').val();
		var mail = $('#mail').val();
		// if(first == ''|| last ==''||mail==''){
		// 	alert('Bạn phải điền đầy đủ những thông tin cần thiết (có dấu *)')
		// }
		if(first == ''){
			$('.tb4').text('Bạn không được bỏ trống mục này.')
		}
		else if(last == ''){
			$('.tb5').text('Bạn không được bỏ trống mục này.')
		}
		else if(!IsEmail(mail)&& mail != '') {
			$('.tb6').text('Vui lòng nhập đúng định dạng email')
		}
		else if(mail == ''){
			$('.tb6').text('Bạn không được bỏ trống mục này.')
		}
		else{
			$('.ct2').css('display','none')
			$('.ct3').css('display','block')
		}
	})
	$('.next3').click(function(){
			$('.ct3').css('display','none')
			$('.ct4').css('display','block')
	})
	$('.finish').click(function(){
		if($('#checkbox').is(':checked')==true){	
			alert('Submited.')
		}
		else{
			alert('Bạn phải chấp nhận điều khoản.')
		}
	})

	$('.prev1').click(function(){
	})
	$('.prev2').click(function(){
			$('.ct2').css('display','none')
			$('.ct1').css('display','block')
	})
	$('.prev3').click(function(){
			$('.ct3').css('display','none')
			$('.ct2').css('display','block')
	})
	$('.prev4').click(function(){	
			$('.ct4').css('display','none')
			$('.ct3').css('display','block')
	})
	function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(email)) {
		  return false;
		}else{
		    return true;
		}
	}

})