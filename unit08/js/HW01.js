var a = prompt("Nhập vào 1 số:",'')
var b = prompt("Nhập vào 1 số:",'')
var c ="";
var s ="";
for (var i = 1; i <=a; i++) {
	for (var j = 1; j <=b; j++) {
		document.write("*")
	}
	document.write("<br/>")
}
document.write("<br/>")
for(var i = 1; i <=a; i++){
	for(var j = 1; j <=b; j++){
		c = "*"
	}
	s+=c;
	document.write(s)
	document.write("<br/>")
}
document.write("<br/>")
for(var i=1;i<=a;i++){
	for(var j=1;j<=a-i+1;j++){
		document.write("*")
	}
	document.write("<br/>")
}
document.write("<br/>")

// for (var i = 1; i <=a; i++) {
// 	if(i = 1){
// 		for(var j = 1; j <=b; j++){
// 			document.write("*")
// 		}
// 	}
// 	else if(i = a){
// 		for(var g = 1; g <=b; g++){
// 			document.write("*")
// 		}
// 	}
// 	else if(i!=a){
// 		document.write("*")
// 		for (var k = 1; k <= b-2; k++) {
// 			document.write(" ")
// 		}
// 		document.write("*")
// 	}
// }