$(document).ready(function(){
    
    $('.toggle-menu').click(function(){
        $('.menu-overlay').fadeIn();
        $('.menu').addClass('active');
        $('body').addClass('inactive');
        
    });
    $('.menu-overlay').click(function(){
        $(this).fadeOut();
        $('.menu').removeClass('active');
        $('body').removeClass('inactive');
        
    });
    
    function skill (){
        var win = $(window).innerHeight();
        var scroll = $(window).scrollTop();
        $('.skill').each(function(){
            var position = $(this).offset().top;
            var value = $(this).attr('data-skill');
            if(position < win + scroll - 10){
              $(this).find('.achievement').css('width', value + '%'); 
            }
        });
    }
    skill();
    $(window).scroll(function(){
        skill();
    });
    
    
    
    
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})