$(document).ready(function(){
    $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
           $('#back_to_top').fadeIn();
        } else {
           $('#back_to_top').fadeOut();
        }
    });
    $('#back_to_top').click(function() {
        $('body,html').animate({scrollTop: 0}, 1500);
    });
    $("#scroll-to-pr").click(function(){
        $('body,html').animate({scrollTop: 700}, 1500);
    })
});