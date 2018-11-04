var n = prompt("Nhập vào 1 số n:",'Nhập vào đây...')
var s = 0;
for(var i = 1; i<=n; i++){
	s +=(1/i)
}
document.write('Tổng các số 1 + 1/2 + 1/3 + … + 1/n bằng: '+s)