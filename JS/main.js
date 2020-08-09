$(document).ready(function () {

    $('.links ul li').click(function () {

        $(this).addClass('active').siblings().removeClass('active')

    });

    $('body').niceScroll();

    $('.filter-container span').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    mixitup($('.projecrs'));


    $(window).on('scroll', () => {

        let x = $(this).scrollTop();
        console.log(x)
        if (x >= 500) {
            $('.fa-angle-up ').fadeIn(500);
        } else {
            $('.fa-angle-up ').fadeOut(500);
        }

    });


    $('.fa-angle-up ').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });























});