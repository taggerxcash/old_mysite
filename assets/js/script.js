var scrolled = false;

$(window).scroll(function(){
    if (!scrolled) {
        var st = $(this).scrollTop();
        console.log(st);
        if(st >= 550 && st<=1430){
            scrolled = true;
            $('.stat-1').addClass('stat-line-1');
            $('.stat-2').addClass('stat-line-2');
            $('.stat-3').addClass('stat-line-3');
            $('.stat-4').addClass('stat-line-4');
        }
    }
});

$(function(){
    $('.slider-to-skills').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#skills').offset().top - 80}, 1000);
      e.preventDefault();
    });
});