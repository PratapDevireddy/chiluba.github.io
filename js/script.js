/**
 * Created by awinash on 11/22/14.
 */

// THIS IS NAVIGATION.
$(document).ready(function () {

    var location;
    var targetClass;
    var navbarSelector = $('a.navigate');

    targetClass = window.location.href.split('#')[1];

    if (typeof targetClass == 'undefined') {
        targetClass = "home";
    }

    $(".book, .home, .author, .contact").css('display', 'none');
    $("." + targetClass).css('display', 'block');

    if(targetClass == "home") {
        $("#cssmenu ul.menu li").removeClass("active");
        $("#cssmenu ul.menu li:nth-child(1)").addClass("active");
    } else if(targetClass == "book"){
        $("#cssmenu ul.menu li").removeClass("active");
        $("#cssmenu ul.menu li:nth-child(2)").addClass("active");
    } else if(targetClass == "author"){
        $("#cssmenu ul.menu li").removeClass("active");
        $("#cssmenu ul.menu li:nth-child(3)").addClass("active");
    } else if(targetClass == "contact"){
        $("#cssmenu ul.menu li").removeClass("active");
        $("#cssmenu ul.menu li:nth-child(4)").addClass("active");
    }

    $(navbarSelector).click(function () {
        location = $(this).data("location");
        $(this).attr({href: '#' + location});
        var target = $(this).attr("href");
        targetClass = "." + target.substring(1, target.length);
        $(".book, .home, .author, .contact").css('display', 'none');
        $(targetClass).css('display', 'block');
    });

    $(".highlights ul.list li").click(function() {
        $(window.location).attr({href: '#book'});
        $(".book, .home, .author, .contact").css('display', 'none');
        $(".book").css('display', 'block');
    });

    $("#cssmenu ul.menu li").click(function() {
        $("#cssmenu ul.menu li").removeClass("active");
        $(this).addClass("active");
    });
});
