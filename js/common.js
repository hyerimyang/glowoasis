$(document).ready(function(){
  // scrollTop header   
  num = 0;
  $(window).scroll(function(){
    sctop = $(window).scrollTop()

    if(sctop >= 100){
      num = 0;
      $('header').removeClass('header')
      $('header').addClass('header-scroll-fixed')
      $('.header-top').hide()
    }else if(sctop == 0) {
      $('header').addClass('header')
      $('header').removeClass('header-scroll-fixed')
      $('.header-top').show()
    }

  })

  // header sub gnb mouseover 
  $('.header-gnb>li').mouseover(function(){
    $(this).children('.sub-gnb').css({"display":"block"})
  })
  $('.header-gnb>li').mouseleave(function(){
    $(this).children('.sub-gnb').css({"display":"none"})
  })

  // logo animate 
  $('.logo').animate({"left":"0"},800)

  // fixed scroll top & bottom 
  $('.scroll-top').click(function(){
    $('html,body').animate({scrollTop:0}, 500)
  })
  $('.scroll-bottom').click(function(){
    $('html,body').animate({scrollTop: $(document).height()}, 500)
  })
  
  
  $('.search-slide').hide()
  // search icon click slide
  $('.search-area').click(function(){
    $('.search-slide').slideToggle();
  })
  $('.close-btn').click(function(){
    $('.search-slide').slideUp();
  })

  $('#go-img').click(function(){
    alert("검색어를 입력해주세요.")
  })
  
});