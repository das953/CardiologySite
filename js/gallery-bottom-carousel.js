/**
 * Created by igor7 on 08.05.2017.
 */
$(document).ready(function(){
    $('#gallery-bottom-carousel').carousel({
        interval: false
    });
    $('.gallery-bottom-carousel-main .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<2;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
    var totalItems = $('.gallery-bottom-carousel-main .item').length;
    var currentIndex = $('div.active').index() + 1;
    $('.num').html(''+currentIndex+'/'+totalItems+'');
   
    $('#gallery-bottom-carousel .carousel-control.left').on('click', function () {
        /*currentIndex = (currentIndex )%(totalItems)-1;
        if(currentIndex<=0)
            currentIndex = currentIndex + totalItems;
        $('.num').html(''+currentIndex+'/'+totalItems+'');*/
    });
});

function checkNum(){
	$('#gallery-bottom-carousel .item.active').each(function(){

				var currentIndex = $(this).attr('numberSlide')
				$('.num').html(''+currentIndex+'/'+8+'')
			
		
	})
}

$(document).on('click', '#gallery-bottom-carousel .carousel-control', function(){
	setTimeout(function(){
		checkNum()
	},600)
	});