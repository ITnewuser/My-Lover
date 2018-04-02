$(function () {
    // var 
    // var some = document.querySelectorAll('.row  a');
    // console.log(some);
    // for (var i = 0; i < some.length; i++) {

    // }

    $(".row  a").each(function (i, e) {

        $(this).on({
            'mouseenter': function () {
                $(this).addClass('animated flip');
            },
            'mouseleave': function () {
                $(this).removeClass('animated flip');
            }
        })
    });


    $('.media img').each(function (i, e) {
        // console.log(e);
        $(this).on({
            'mouseenter': function () {
                // console.log($(this));
                $(this).addClass('animated swing');
            },
            'mouseleave': function () {
                $(this).removeClass('animated swing');
            }
        })
    })




});