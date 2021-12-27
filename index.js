if ((screen.width < 450)) {

    $(".side").css('display', 'none'); // you can also use $(".yourClass").hide();
} else {
    // if screen size width is less than 1024px
    $(".side").css('display', 'block'); // here you can also use show();
}