$(function(){
	$('.add').click(function(){
		var input = $('.input').val()
		if(input ==''){
			alert('Vui lòng nhập nội dung.')
		}else{
			$('#table').prepend(`<tr>
				<td class="check"><i class="fas fa-check"></i></td>
				<td class="cv">`+input+`</td>
				<td class="del"><i class="fas fa-times"></i></td>
			</tr>`)
		$('.input').val('')
	}
})
	$('#table').on('mouseover', 'tr',function(){
		$(this).css('background-color', '#888')
	})
	$('#table').on('mouseout', 'tr',function(){
		$(this).css('background-color', 'white')
	})
	$('#table').on('click','.cv',function(){
		var text = $(this)
		text.css('text-decoration', 'line-through')
		if(text.prev().children().css('display') == 'block'){
			text.prev().children().css('display','none')
			text.css('text-decoration','none')
		}
		else{
			text.prev().children().css('display','block')
		}
	})
	$('#table').on('click','.del',function(){
		$(this).parent().remove()
	})
})