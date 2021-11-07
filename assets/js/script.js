// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  $('.preloader').fadeOut(0);
});

// on ready state
$(document).ready(function () {
  'use strict';

  //  Search Form Open
  $('#searchOpen, #searchOpen-mobile').on('click', function () {
    $('.search-wrapper').addClass('open');
    setTimeout(function () {
      $('.search-box').focus();
    }, 400);
  });
  $('#searchClose, #searchClose-mobile').on('click', function () {
    $('.search-wrapper').removeClass('open');
  });

  // tab
  $('.tab-content').find('.tab-pane').each(function (idx, item) {
    var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
      title = $(this).attr('title');
    navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
  });

  $('.code-tabs ul.nav-tabs').each(function () {
    $(this).find("li:first").addClass('active');
  })

  $('.code-tabs .tab-content').each(function () {
    $(this).find("div:first").addClass('active');
  });

  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest('.code-tabs'),
      tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');
  });


  // venobox
  $('.venobox').venobox();

  // instafeed
    if (($('#instafeed').length) !== 0) {
      var accessToken = $('#instafeed').attr('data-accessToken');
      var userFeed = new Instafeed({
        get: 'user',
        resolution: 'low_resolution',
        accessToken: accessToken,
        template: '<a href="{{link}}" target="_blank" class="instagram-post"><img class="img-fluid w-100" src="{{image}}"></a>'
      });
      userFeed.run();
    }
  
    setTimeout(function () {
      $('.instagram-slider').slick({
        dots: false,
        speed: 300,
        autoplay: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
        ]
      });
    }, 1500);


});


