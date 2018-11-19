$(function(){
	// $('#ex').on('mouseenter',function(){
	// 	$('#ex').css('background-color','yellow')
	// })
	// $('#ex').mouseleave(function(){
	// 	$(this).css('background-color','black')
	// })
	// $('#size').on('change',function(){
	// 	var value = $(this).val();
	// 	if(value == 16){
	// 		$('#price').text('Giá là 5.000.000 VNĐ')
	// 	}
	// 	if (value == 32) {
	// 		$('#price').text('Giá là 6.000.000 VNĐ')
	// 	}
	// 	if (value == 64) {
	// 		$('#price').text('Giá là 7.000.000 VNĐ')
	// 	}
	// })
	// $('#show').click(function(){
	// 	$('#ex').fadeOut(1000);
	// })
	// $('#hide').click(function(){
	// 	$('#ex').fadeIn(1000);
	// })
	// $('#toggle').click(function(){
	// 	$('#ex').toggle(1000);
	// })
	$('#input').click(function(){
		$('#section').children().not('.choose').css('color', 'red')
	})


})