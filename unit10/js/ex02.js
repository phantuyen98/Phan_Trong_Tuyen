
document.getElementById('signUp').addEventListener('click',function(){
	var name = document.getElementsByClassName('name')[0].value;
	if (name == null || name == '') {
		document.getElementById("errName").innerHTML="Bạn không được để trống tên!";
	}
	else {
		document.getElementById('errName').innerHTML=""
	}
 	var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var email = document.getElementsByClassName('email')[0].value;
	if(filter.test(String(email).toLowerCase()) == false) {
		document.getElementById('tbemail').innerHTML="Bạn phải nhập đúng định dạng email!"
	}
	else {
		document.getElementById('tbemail').innerHTML=""
	}
	
	var pass = document.getElementsByClassName('pass')[0].value;
	if (pass.length < 6) {
		document.getElementById('tbpass').innerHTML="Bạn phải nhập nhiều hơn 6 kí tự cho mật khẩu!!"
	}
	else {
		document.getElementById('tbpass').innerHTML=""
	}
	var mobile = document.getElementsByClassName('mobile')[0].value;
	if (mobile.length == 0){
		document.getElementById('tbmb').innerHTML="Số điện thoại không được để trống!"
	}
	else {
		document.getElementById('tbmb').innerHTML=""
	}
})
