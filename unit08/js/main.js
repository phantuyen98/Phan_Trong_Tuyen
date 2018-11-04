function clickMe(){
	var a = document.getElementsByClassName('text')
	for(var i = a.length -1; i >=0; i--){
		a[i].style.color='red';
	}
}
