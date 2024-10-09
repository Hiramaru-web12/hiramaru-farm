$(function (){
  // swiper

  const swiper1 = new Swiper('.fv-swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    fadeEffect: { 
      crossFade: true
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const swiper2 = new Swiper('.products-swiper', {
  // Optional parameters
  loop: true,
  loopAdditionalSlides: 1,
  loopedSlides: 5,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
});

//logoの表示
$(window).on('load',function(){
  $("#loading").delay(1500).fadeOut('slow');
  $("#loading-logo").delay(1200).fadeOut('slow');
});


//スムーススクロール
$('a[href^="#"]').click(function() {
  let adjust = 200;
  let speed = 500;
  let href = $(this).attr('href');//リンク先を取得
  let target = $("#" == href ? "html" : href);//移動先のidを取得
  let position = $(target).offset().top + adjust;
  $('html, body').animate(
    {
      scrollTop: position - $('#js-header').outerHeight()
   },
    speed
  );
  return false;
});

// クリックイベント
$('.header-nav-item a').click(function() {
  if( $("[href^='#']") ){
  $('.header-nav-item a').removeClass( 'is-active' );
  $(this).addClass( 'is-active' );
  return false;
  }
});


// ハンバーガーメニュートグル
$('.drawer-icon').on('click',function(e) {
  e.preventDefault();
  $('.drawer-icon, .drawer-content').toggleClass('is-active');
  
  return false;
});


$('.drawer-content-item a').on('click',function(e) {
  e.preventDefault();
  $('.drawer-icon, .drawer-content').removeClass('is-active');
  
  return false;  
});

// faq
 $(".faq-box-q").on("click", function() {
   $(this).next().slideToggle();
   $(this).children('.faq-box-icon').toggleClass('is-open');
  });

  //radioボタン
  var inputs = $('input');
  var checked = inputs.filter(':checked').val();
  
  inputs.on('click', function(){
      if($(this).val() === checked) {
          $(this).prop('checked', false);
          checked = '';
      } else {
          $(this).prop('checked', true);
          checked = $(this).val();
      }
  });

  
  // formの入力確認
  let $submit = $('#js-submit');
  var $required = $('#js-form input, #js-form textarea .js-require');
  
  $required.on('change',function(){
    $submit.prop('disabled', false);
    
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form textarea[name="your-message"]').val( ) !== ""
     )
    {
      //必須項目が入力されたとき
      $submit.prop('disabled', false);
      $submit.addClass('-active')
    } else {
      //     //入力されていないとき
      $submit.prop('disabled', true);
      $submit.removeClass('-active')
      
    }
  });

  //googleform
let $form = $('#js-form')
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理
       $form.slideUp()
       $('#js-success').slideDown()
      },
      
      200: function () {
        //送信に失敗したときの処理
        $form.slideUp()
        $('#js-error').slideDown()
      }
    }
  });
  return false;
});
  
});


