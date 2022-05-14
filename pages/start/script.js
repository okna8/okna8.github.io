jQuery(document).ready(function($) {
    $(function() {
      $('.btn_down').click(function() {
        $('.all').addClass('allHideTop');
        $('.all').removeClass('allShowDown');
        $('.btn_down').addClass('hidden');
        $('.btn_up').removeClass('hidden');
        $('.apps').addClass('appsShowtop');
        $('.apps').removeClass('appsHidedown');
        $('.apps').css('display','block');
      });
      $('.btn_up').click(function() {
        $('.all').removeClass('allHideTop');
        $('.all').addClass('allShowDown');
        $('.btn_down').removeClass('hidden');
        $('.btn_up').addClass('hidden');
        $('.apps').removeClass('appsShowtop');
        $('.apps').addClass('appsHidedown');
        setTimeout(function(){
          $('.apps').css('display','none');
        },500);
      });
      $('.desktoptile').click(function() {
        $('.all2').toggleClass('desktopopen');
        setTimeout(function(){
            window.location.href = '../desktop/desktop.html';
        }, 170);
      });
      $('.taskbar_startbutton').click(function() {
        $('.all2').toggleClass('desktopopen');
        setTimeout(function(){
            window.location.href = '../desktop/desktop.html';
        }, 170);
      });
    });
  });
  $(function(){
    $('.rumode_btn').click(function(){
        $('body').toggleClass('rumode_on');
        if (localStorage.getItem('rumode_active') == 'true') {
            localStorage.setItem('rumode_active', 'false')
        } else {
            localStorage.setItem('rumode_active', 'true')
        }
            

    });
  });
  if (localStorage.getItem('rumode_active') == "true") {
    $('body').addClass('rumode_on');
  } else {
    $('body').addClass('bodyanimation');
  }














      // ЗАПУСК ПРИЛОЖЕНИЙ

  $('.TILE_metromail').click(function(){
    window.location.href = '../builtinMetroApps/METRO_mail/mainpage.html';
  })
  $('.TILE_metrocalc').click(function(){
    $('.openappani2').addClass('openappani');
    $('.openappani2').css('background-color','rgb(0,138,0)');
    $('.openappaniSplashlogo').attr('src','../builtinMetroApps/METRO_calc/splash.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-top: -106px; margin-left: -81px;');
    setTimeout(function(){
    window.location.href = '../builtinMetroApps/METRO_calc/mainpage.html';
    },500);
  })
  $('.TILE_metroie').click(function(){
    $('.openappani2').addClass('openappani');
    $('.openappani2').css('background-color','rgb(38,114,236)');
    $('.openappaniSplashlogo').attr('src','../builtinMetroApps/METRO_ie/splash.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-top:-112px;margin-left:-112px;');
    setTimeout(function(){
    window.location.href = '../builtinMetroApps/METRO_ie/mainpage.html';
    },500);
  })
  $('.TILE_metrosettengs').click(function(){
    
    $('.openappani2').addClass('openappani');
    $('.openappani2').css('background-color','rgb(81,51,171)');
    $('.openappaniSplashlogo').attr('src','../builtinMetroApps/METRO_settengs/splash.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-top: -106px; margin-left: -81px;');
    setTimeout(function(){
    window.location.href = '../builtinMetroApps/METRO_settengs/mainpage.html';
    },500);
  })
  $('.TILE_metromusic').click(function(){
    window.location.href = '../builtinMetroApps/METRO_music/mainpage.html';
  })
  $('.TILE_store').click(function(){
    $('.openappani2').addClass('openappani');
    $('.openappani2').css('background-color','rgb(0,138,0)');
    $('.openappaniSplashlogo').attr('src','../METRO_store/splash.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-left: -105px; margin-top: -119px;');
    setTimeout(function(){
    window.location.href = '../METRO_store/mainpage.html';
    },500);
  })
  $('.TILE_igor2677-changelog').click(function(){
    $('.openappani2').addClass('openappani');
    $('.openappaniSplashlogo').attr('src','../METRO_store/appsResources/icns/igor2677-changelogapp-icon150x150.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-left: -75px; margin-top: -75px;');
    setTimeout(function(){
    window.location.href = '../appsFromStore/igor2677-changelog/mainpage.html'
    },500);
  })
  $('.TILE_nerok-2048').click(function(){
    $('.openappani2').addClass('openappani');
    $('.openappani2').css('background-color','rgb(236,196,0)');
    $('.openappaniSplashlogo').attr('src','../appsFromStore/nerok-2048/splash.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-left: -74px; margin-top: -74px;');
    setTimeout(function(){
    window.location.href = '../appsFromStore/nerok-2048/2048.html'
    },500);
  })
  $('.TILE_nerok-tetris').click(function(){
    $('.openappani2').addClass('openappani');
    $('.openappani2').css('background-color','#990000');
    $('.openappaniSplashlogo').attr('src','../appsFromStore/nerok-tetris/splash.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-left: -75px; margin-top: -75px;');
    setTimeout(function(){
    window.location.href = '../appsFromStore/nerok-tetris/tetris.html'
    },500);
  })
  $('.TILE_igor2677-okna').click(function(){
    $('.openappani2').addClass('openappani');
    $('.openappani2').css('background-color','rgb(0, 205, 254)');
    $('.openappaniSplashlogo').attr('src','../appsFromStore/igor2677-okna/splash.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-left: -75px; margin-top: -75px;');
    setTimeout(function(){
    window.location.href = '../appsFromStore/igor2677-okna/okna.html'
    },500);
  })
  $('.TILE_fleenyt-autosimu').click(function(){
    $('.openappani2').addClass('openappani');
    $('.openappani2').css('background-color','rgb(189, 15, 23)');
    $('.openappaniSplashlogo').attr('src','../appsFromStore/fleenyt-autosimu/splash.png');
    $('.openappaniSplashlogo').attr('style','position: absolute; top:50%;left:50%; margin-left: -129px; margin-top: -54px;');
    setTimeout(function(){
    window.location.href = '../appsFromStore/fleenyt-autosimu/mainpage.html'
    },500);
  })









  //     ОТОБРАЖЕНИЕ УСТАНОВЛЕННЫХ ПРИЛОЖЕНИЙ

  if(localStorage.getItem('igor2677-pcinfo_installstate') == 1) {
    $('.TILE_igor2677-pcinfo').removeClass('hidden');
    $('.category_p').removeClass('hidden');
    $('.appInAppscontainer_igor2677-pcinfo').removeClass('hidden');
}
if(localStorage.getItem('igor2677-changelog_installstate') == 1) {
    $('.TILE_igor2677-changelog').removeClass('hidden');
    $('.category_c').removeClass('hidden');
    $('.appInAppscontainer_igor2677-changelog').removeClass('hidden');
}
if(localStorage.getItem('nerok-2048_installstate') == 1) {
    $('.TILE_nerok-2048').removeClass('hidden');
    $('.category_hashtag').removeClass('hidden');
    $('.appInAppscontainer_nerok-2048').removeClass('hidden');
}
if(localStorage.getItem('nerok-tetris_installstate') == 1) {
    $('.TILE_nerok-tetris').removeClass('hidden');
    $('.category_t').removeClass('hidden');
    $('.appInAppscontainer_nerok-tetris').removeClass('hidden');
}
if(localStorage.getItem('igor2677-okna_installstate') == 1) {
    $('.TILE_igor2677-okna').removeClass('hidden');
    $('.category_o').removeClass('hidden');
    $('.appInAppscontainer_igor2677-okna').removeClass('hidden');
}
if(localStorage.getItem('fleenyt-autosimu_installstate') == 1) {
    $('.TILE_fleenyt-autosimu').removeClass('hidden');
    $('.category_a').removeClass('hidden');
    $('.appInAppscontainer_fleenyt-autosimu').removeClass('hidden');
}
