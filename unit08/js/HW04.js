var n = prompt("Nhập vào số n:",'Nhập vào đây...')
var m = prompt("Nhập vào số m:",'Nhập vào đây...')
var k = prompt("Nhập vào số k:",'Nhập vào đây...')
var s = 0;

if(n <= m){
	for(var i = n; i<=m ; i++){
		if(i%k==0){
			s +=i;
		}
	}
	document.write('Tổng các số chia hết cho '+k+' trong khoảng từ '+n+' đến '+m+' bằng: '+s)
}
else{
	document.write('Bạn cần nhập số n < m')
}
