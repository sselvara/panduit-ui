$(document).ready(function() {

  var _IsIE8 = $('html').hasClass('lt-ie9');
  var _IsIE9 = $('html').hasClass('lt-ie10');
  var _IPAD = (navigator.userAgent.match(/iPad/i)) ? true : false;

  function getDeviceTypeByQuery() {
  	if(_IsIE8 || _IsIE9) return 'desktop'; /*Simply return desktop for IE 8. Checking `matchMedia` on IE8 is making browser very slow*/

      if (matchMedia('only screen and (max-width: 480px)').matches || matchMedia('only screen and (max-width: 767px)').matches) {
          return 'mobile';
      } else if (_IPAD || matchMedia('only screen and (min-width: 768px) and (max-width: 979px)').matches) {
          return 'tablet';
      } else if (matchMedia('only screen and (min-width: 1200px)').matches) {
          return 'desktop';
      } else {
          return 'desktop';
      }
  }


    $('.panduit-main-nav li').click (function(e) {
      e.preventDefault();
      if(getDeviceTypeByQuery() == 'desktop') {
        var prevli = $(this).prev('li').width() ? $(this).prev('li').width() : 0;
        $(this).find('.multi-level').toggleClass('activeMainLink');

        if(document.querySelector('.multi-level.activeMainLink')) {
          document.querySelector('.multi-level.activeMainLink').style.left =
          (document.querySelector(".panduit-navbar").getBoundingClientRect().left -
          document.querySelector(".panduit-main-nav").getBoundingClientRect().left -
          prevli ) + "px"
        }
      }

      if((getDeviceTypeByQuery() == 'mobile') || (getDeviceTypeByQuery() == 'tablet')) {
        $(this).toggleClass('main-nav-active');
        $(this).find('.dropdown-menu').first().addClass('active');
      }
    });

if((getDeviceTypeByQuery() == 'mobile') || (getDeviceTypeByQuery() == 'tablet')) {
  $('.navbar-header .navbar-toggle.collapsed').click(function (e) {
    $('.panduit-collapsible-navbar.collapse.in, .dropdown-submenu active show-menu').height($(window).height()+'px');
    $('html').css('overflow-y','hidden');
  });

    $('.dropdown-submenu i').click(function (e) {
      e.stopPropagation();
      $(this).toggleClass('caret-right');
      //$('.main-nav-active>a').addClass('hide');
      $(this).parent().parent().toggleClass('active');
      $(this).parent().parent().toggleClass('show-menu');
      $('.multi-level').removeClass('active');
    });
  }





  /*NavBar Section- Ends*/
});
