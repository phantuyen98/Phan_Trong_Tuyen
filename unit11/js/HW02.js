$(function(){
	$('.tab').on('click',function(){
		var index = $(this);
		if($(this).next().css('display')=='none'){

			$(this).next().css('display','block')
			$(this).children('i.fa-plus').css('display','none')
			$(this).children('i.fa-minus').css('display','inline-block')
			// index.children(":nth-child(1)").css('display','none')
			// index.children(":nth-child(2)").css('display','inline-block')
		}
		else{
			$(this).next().css('display','none')
			$(this).children('i.fa-plus').css('display','inline-block')
			$(this).children('i.fa-minus').css('display','none')
			// index.children(":nth-child(1)").css('display','inline-block')
			// index.children(":nth-child(2)").css('display','none ')
		}
	})
})