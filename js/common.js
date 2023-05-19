// $(document).ready(function() {
//     $(".slider").bxSlider({
//         pager: false,
//         controls: false,
//         auto: true
//     })
// })

$(document).ready(function(){
    setTimeout(function() {
        $('.slider').bxSlider();
    }, 200)
    $(".gnb > li:eq(1)").on("mouseenter focus", function() {
        $(".gnb-dropdown").stop().slideDown()
    }).on("mouseleave blur", function() {
        $(".gnb-dropdown").stop().slideUp()
    })
})


window.onload = function() {
    let frm = document.frm;
    frm.addEventListener("submit", function(e) {
        frm.result.innerHTML = "";
        e.preventDefault();
        if(frm.id.value.trim().length < 4){
            frm.result.innerHTML = "아이디를 4자 이상 입력하세요"
        } 
        else if(frm.pw.value.trim().length < 4){
            frm.result.innerHTML = "비밀번호를 4자 이상 입력하세요"
        } 
        else if(frm.chkpw.value.trim().length < 4){
            frm.result.innerHTML = "비밀번호 확인을 입력하세요"
        } 
        else if(frm.name.value.trim().length == 0){
            frm.result.innerHTML = "이름을 입력하세요"
        }
        else {
            frm.submit();
        }
    })
}

$(function() {
    $(".board").hover(function() {
        $(".drop1").stop().slideDown(100)
        $(".drop2").stop().slideDown(100)
    }, function() {
        $(".drop1").stop().slideUp(100)
        $(".drop2").stop().slideUp(100)
    })

    $(".nav-drop").hover(function() {
        $(".drop1").stop().slideDown(100)
        $(".drop2").stop().slideDown(100)
    }, function() {
        $(".drop1").stop().slideUp(100)
        $(".drop2").stop().slideUp(100)
    })
})
