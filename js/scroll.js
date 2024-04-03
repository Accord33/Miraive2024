$(function(){
    $('a[href^=#]').click(function() {
        var speed = 400; // ミリ秒
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    });
$(function(){
    $('area[href^=#]').click(function() {
        var speed = 400; // ミリ秒
        var adjust = 200; // pxずれる
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust2222;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    });