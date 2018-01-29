
jQuery(document).ready(function ($) {


    // dynamic header code start
    $(function () {
        var shrinkHeader = 300;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.header__wrap').addClass('shrink');
            }
            else {
                $('.header__wrap').removeClass('shrink');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
    // dynamic header code end


    // services info icon animation code start
    $("#first__child")
        .mouseenter(function () {
            $('#first__child__img1').css('right', '45px');
            $('#first__child__img2').css('left', '0');
        })
        .mouseleave(function () {
            $('#first__child__img1').css('right', '0');
            $('#first__child__img2').css('left', '45px');
        });
    $("#second__child")
        .mouseenter(function () {
            $('#second__child__img1').css('right', '45px');
            $('#second__child__img2').css('left', '0');
        })
        .mouseleave(function () {
            $('#second__child__img1').css('right', '0');
            $('#second__child__img2').css('left', '45px');
        });
    $("#third__child")
        .mouseenter(function () {
            $('#third__child__img1').css('right', '45px');
            $('#third__child__img2').css('left', '0');
        })
        .mouseleave(function () {
            $('#third__child__img1').css('right', '0');
            $('#third__child__img2').css('left', '45px');
        });
    // services info icon animation code start

    // reviews start
    $("#first__review")
        .mouseenter(function () {
            $('#first__review__img1').css('top', '-30px');
            $('#first__review__img2').css('top', '5px');
        })
        .mouseleave(function () {
            $('#first__review__img1').css('top', '5px');
            $('#first__review__img2').css('top', '35px');
        });
    $("#second__review")
        .mouseenter(function () {
            $('#second__review__img1').css('top', '-30px');
            $('#second__review__img2').css('top', '5px');
        })
        .mouseleave(function () {
            $('#second__review__img1').css('top', '5px');
            $('#second__review__img2').css('top', '35px');
        });
    // reviews end  

    // mobile drop menu appearing code start

    $('#mobile__header').on('click', function () {
        var dropMenu = $('#drop__menu');
        if (dropMenu.css('top') === '-300px') {
            dropMenu.css({
                'top': '67px'
            });
        }
        else {
            dropMenu.css({
                'top': '-300px'
            });
        }
    });

    // language switch button start
    $('#lang__switch').on('click', function () {
        var langSwitch = $('.lang__wrap');
        if (langSwitch.css('right') === '11px') {
            langSwitch.css({
                'right': '-25px'
            });
        }
        else {
            langSwitch.css({
                'right': '11px'
            });
        }
    });
    // language switch button end

    // modal adaptivity start

    $(document).ready(function () {
        // run test on initial page load
        checkSize();
        // run test on resize of the window
        $(window).resize(checkSize);
    });
    //Function to the css rule
    function checkSize() {
        if ($("#info__modal").css("overflow") == "hidden") {
            $('#second__child').on('click', function () {
                var langSwitch = $('#info__modal');
                if (langSwitch.css('left') === '0px') {
                    langSwitch.css({
                        'left': '-100vw'

                    });
                }
                else {
                    langSwitch.css({
                        'left': '0px',
                        'width': '100vw',
                        'height': 'auto',
                        'border-bottom': '1px solid lightgray'
                    });
                }
            });
        }
        if ($(".title__info__btn").css("display") == "none") {
            $("#second__child")
            .mouseenter(function () {
                $('.modal__prices__block').css('flex-direction', 'column');
                $('.info__block__prices').css('justify-content', 'center');
                $('.info__block__prices').css('min-width', 'unset');
                $('.info__block__prices__child').css('margin-right', '.9rem');

            })
            .mouseleave(function () {
                $('#info__modal').css('left', '-100vw');
            });
        }
        else{
            $('#second__child').on('click', function () {
                var langSwitch = $('#info__modal');
                if (langSwitch.css('left') === '0px') {
                    langSwitch.css({
                        'left': '-100vw'
                    });
                }
                else {
                    langSwitch.css({
                        'left': '0px'
                    });
                }
            });
        }
    }
    // modal  end

    // mobile drop menu appearing code end

    // info drop down block start
    $('.info__title').on('click', function () {
        var dropDownList = $('.info__list');
        if (dropDownList.css('max-height') === '0px') {
            dropDownList.css({
                'max-height': '300px'
            });
            $('#drop__down__list__btn').css({
                'transform': 'rotate(-180deg)'
            });
            
        }
        else {
            dropDownList.css({
                'max-height': '0px'
                
            });
            $('#drop__down__list__btn').css({
                'transform': 'rotate(0deg)'
            });
        }
    });
    // info drop down block end

    // soft scroll start
    (function(document, history, location) {
        var HISTORY_SUPPORT = !!(history && history.pushState);
      
        var anchorScrolls = {
          ANCHOR_REGEX: /^#[^ ]+$/,
          OFFSET_HEIGHT_PX: 100,
      
          /**
           * Establish events, and fix initial scroll position if a hash is provided.
           */
          init: function() {
            this.scrollToCurrent();
            $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
            $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
          },
      
          /**
           * Return the offset amount to deduct from the normal scroll position.
           * Modify as appropriate to allow for dynamic calculations
           */
          getFixedOffset: function() {
            return this.OFFSET_HEIGHT_PX;
          },
      
          /**
           * If the provided href is an anchor which resolves to an element on the
           * page, scroll to it.
           * @param  {String} href
           * @return {Boolean} - Was the href an anchor.
           */
          scrollIfAnchor: function(href, pushToHistory) {
            var match, anchorOffset;
      
            if(!this.ANCHOR_REGEX.test(href)) {
              return false;
            }
      
            match = document.getElementById(href.slice(1));
      
            if(match) {
              anchorOffset = $(match).offset().top - this.getFixedOffset();
              $('html, body').animate({ scrollTop: anchorOffset});
      
              // Add the state to history as-per normal anchor links
              if(HISTORY_SUPPORT && pushToHistory) {
                history.pushState({}, document.title, location.pathname + href);
              }
            }
      
            return !!match;
          },
          
          /**
           * Attempt to scroll to the current location's hash.
           */
          scrollToCurrent: function(e) { 
            if(this.scrollIfAnchor(window.location.hash) && e) {
                e.preventDefault();
            }
          },
      
          /**
           * If the click event's target was an anchor, fix the scroll position.
           */
          delegateAnchors: function(e) {
            var elem = e.target;
      
            if(this.scrollIfAnchor(elem.getAttribute('href'), true)) {
              e.preventDefault();
            }
          }
        };
      
          $(document).ready($.proxy(anchorScrolls, 'init'));
      })(window.document, window.history, window.location);
      
    // soft scroll end
});