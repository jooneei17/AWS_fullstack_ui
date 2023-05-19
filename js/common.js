$(document).ready(function(){
    setTimeout(function() { //bxSlider를 0.2초정도 늦게 불러오면 적용이 안 될때 수행 가능하다!
        $('.slider').bxSlider();
    }, 200)
    $(".gnb > li:eq(1)").on("mouseenter focus", function() { //focus로 설정해야 tab키로 움직일 수 있음
        $(".gnb-dropdown").stop().slideDown()
    }).on("mouseleave blur",function() {
        $(".gnb-dropdown").stop().slideUp()
    } )
});