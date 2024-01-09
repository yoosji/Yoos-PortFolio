$(document).ready(function(){

    
    let ww=$(window).width();
    let wh=$(window).height();
  
   
  function layout(){
    ww=$(window).width();
    wh=$(window).height();
    $(".wrap").css({
        width:ww,
        height:wh
    })
    $(".page").css({
        width:ww,
        height:wh
    })
    $(".move_box").css({
      width:ww*2,
      height:wh
    })
  }
  layout();

$(window).resize(function(){
  layout();
})



// 메인 프로젝트 미리보기

$(".pro_wrap").on({
  mouseenter:function(){
    $(".hidden",this).fadeIn(500);
    $(".wrap_whitebox",this).fadeOut(500);
  }, 
  mouseleave:function(){
    $(".wrap_whitebox",this).fadeIn(500);
    $(".hidden",this).fadeOut(500);
   
  }
});


// 메뉴 아이콘
$(".menu_icon").on({
  click:function(){
    $(".menu_wrap").toggle(500);
  }
})


// 마지막 다운로드 hover
$(".download").hover(function(){
  $(".black_con",this).fadeIn();
},function(){
  $(".black_con",this).fadeOut();
})






// 무브박스

// 메인 프로젝트 움직임값
const box_w=$(".pro_wrap").width();
const box_m=parseInt($(".pro_wrap").css('marginLeft'));
const bwm=box_w+box_m;

let click_num=0;

$(".left_but").click(function(){
  click_num--;
  if(click_num<=-1){
    click_num=3;
  }
  $(".move_box").animate({
    left:-bwm*click_num
  },500)
})

$(".right_but").click(function(){
  click_num++;
  if(click_num>3){
    click_num=0;
  }
  $(".move_box").animate({
    left:-bwm*click_num
  },500)
})




// 스와이프



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  //=> 스와이프 방향
  //=> 세로 움직임 vertical
  //=> 가로 움직임 horizontal
  loop: true, 
  //=>순환 여부
  //=>true 무한 반복
  //=>false 반복 안함

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // => 점메뉴 형식
    // => 페이지 메뉴 요소 명
  },
  // Navigation arrows
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar', // 스크롤 형식
  },
  spaceBetween:50,
});


swiper();


})