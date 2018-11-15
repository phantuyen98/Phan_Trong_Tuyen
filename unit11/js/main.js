$( function (){
	$('.add').click(function(){
		var input = $('input').val()

		$('table').prepend(`<tr>
				<td>
					<input class='checkbox' type="checkbox" name="">
				</td>
				<td>
					`+input+`
				</td>
				<td>
					<button class="edit">Edit</button>
				</td>
				<td>
					<button class="del">Delete</button>
				</td>
			</tr>`)
		$('#input').val('')
	})		

	$('body').on('click','.del', function(){
		$(this).parent().parent().remove();
	})
	$('.uncheck1').click(function(){
		var checkbox = $('.checkbox')
		for (var i = checkbox.length - 1; i >= 0; i--) {
			checkbox[i].checked = false;
		}
	})
	$('.check1').click(function(){
		var checkbox = $('.checkbox')
		for (var i = checkbox.length - 1; i >= 0; i--) {
			checkbox[i].checked = true;
		}
	})

})
