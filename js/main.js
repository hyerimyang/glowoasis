$(document).ready(function(){
  num = 0;
  $(window).scroll(function(){
    sctop = $(window).scrollTop()
    
    // product title 
    if(sctop >= 150){
      num = 0;
      $('.product-title').animate({
        "opacity":"1", 
        "margin-left":"0"
      }, 1000)
    }
    // product top ul
    if(sctop >= 500){
      $('.item-top-wrap').animate({
        "opacity":"1",
        "margin-top":"0"
      },1000)
    }
    // product bottom ul
    if(sctop >= 900){
      $('.item-bottom-wrap').animate({
        "opacity":"1",
        "margin-top":"0"
      },1000)
    }
    // banner
    if(sctop >= 1400){
      $('.banner02').animate({
        "opacity":"1",
        "margin-top":"0"
      },1000)
    }
    if(sctop >= 1500){
      $('.banner01,.banner03').animate({
        "opacity":"1",
        "margin-top":"0"
      },1000)
    }
    // video title
    if(sctop >= 1900) {
      $('.video-title').animate({
        "opacity":"1",
        "margin-left":"0"
      },1000)
    }
    // story title
    if(sctop >= 2900) {
      $('.story-bg>h2').animate({
        "opacity":"1",
        "margin-left":"0"
      },1000)
    }
    // story container
    if(sctop >= 3200) {
      $('.story-ment').animate({
        "opacity":"1",
        "margin-top":"0"
      },800)
    }
    if(sctop >= 3400) {
      $('.story-img').animate({
        "opacity":"1",
        "margin-top":"0"
      },800)
    }
    // magazine title
    if(sctop >= 3600) {
      $('.magazine-title').animate({
        "opacity":"1",
        "margin-left":"0"
      },1000)
    }
    // magazine container
    if(sctop >= 3900) {
      $('.magazine-container').animate({
        "opacity":"1",
        "margin-top":"0"
      },800)
    }

  }) // scroll


  // product image mouseover 
  $('.itemBox_01>a>img').mouseover(function(){
   $(this).attr('src', 'images/main/product_hover_img01.jpg');
  })
  $('.itemBox_01>a>img').mouseleave(function(){
    $(this).attr('src', 'images/main/product_item_01.png');
  })
  
  $('.itemBox_02>a>img').mouseover(function(){
    $(this).attr('src', 'images/main/product_hover_img02.png');
   })
   $('.itemBox_02>a>img').mouseleave(function(){
     $(this).attr('src', 'images/main/product_item_02.png');
   })

   $('.itemBox_03>a>img').mouseover(function(){
    $(this).attr('src', 'images/main/product_hover_img03.png');
   })
   $('.itemBox_03>a>img').mouseleave(function(){
     $(this).attr('src', 'images/main/product_item_03.png');
   })

   $('.itemBox_04>a>img').mouseover(function(){
    $(this).attr('src', 'images/main/product_hover_img04.png');
   })
   $('.itemBox_04>a>img').mouseleave(function(){
     $(this).attr('src', 'images/main/product_item_04.png');
   })

   $('.itemBox_05>a>img').mouseover(function(){
    $(this).attr('src', 'images/main/product_hover_img05.png');
   })
   $('.itemBox_05>a>img').mouseleave(function(){
     $(this).attr('src', 'images/main/product_item_05.png');
   })
   
   $('.itemBox_06>a>img').mouseover(function(){
     $(this).attr('src', 'images/main/product_hover_img06.png');
    })
    $('.itemBox_06>a>img').mouseleave(function(){
      $(this).attr('src', 'images/main/product_item_06.png');
    })
 
    $('.itemBox_07>a>img').mouseover(function(){
     $(this).attr('src', 'images/main/product_hover_img07.png');
    })
    $('.itemBox_07>a>img').mouseleave(function(){
      $(this).attr('src', 'images/main/product_item_07.png');
    })
 
    $('.itemBox_08>a>img').mouseover(function(){
     $(this).attr('src', 'images/main/product_hover_img08.png');
    })
    $('.itemBox_08>a>img').mouseleave(function(){
      $(this).attr('src', 'images/main/product_item_08.png');
    })


    // product option 
    $('.itemBox').mouseover(function(){
      $(this).children('.product-option').css({'display':'block'});
    })
    $('.itemBox').mouseleave(function(){
      $(this).children('.product-option').css({'display':'none'})
    })
    // tooltip
    $('.product-option>li>a').mouseover(function(){
      $(this).children('span').css({'display':'block'});
    })
    $('.product-option>li>a').mouseleave(function(){
      $(this).children('span').css({'display':'none'});
    })

    // magazine hover 
    $('.magazine-container>ul>li').mouseover(function(){
      $(this).css({"margin-top":"-10px"},100)
    })
    $('.magazine-container>ul>li').mouseleave(function(){
      $(this).css({"margin-top":"0px"},100)
    })
});