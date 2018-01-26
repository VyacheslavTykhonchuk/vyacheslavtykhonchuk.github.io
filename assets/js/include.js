
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
            $("#second__child")
            .mouseenter(function () {
                $('#info__modal').css('left', '0');
                $('#info__modal').css('width', '100vw');
                $('#info__modal').css('height', 'auto');
                $('#info__modal').css('border-bottom', '1px solid lightgray');

            })
            .mouseleave(function () {
                $('#info__modal').css('left', '-100vw');
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
            $("#second__child")
            .mouseenter(function () {
                $('#info__modal').css('left', '0');
            })
            .mouseleave(function () {
                $('#info__modal').css('left', '-100vw');
            });
        }
    }
    // modal  end

    // mobile drop menu appearing code end
});