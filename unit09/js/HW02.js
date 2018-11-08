
document.getElementById('check').addEventListener('click', function(){
	var list = document.getElementsByTagName("input");
	for (var i = list.length - 1; i >= 0; i--) {
		list[i].checked = true;
	}
})
document.getElementById('uncheck').addEventListener('click', function(){
	var listu = document.getElementsByTagName("input");
	for (var i = listu.length - 1; i >= 0; i--) {
		listu[i].checked = false;
	}
})