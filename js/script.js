$(document).ready(function () {
    $("#loadMore").click(function () {
        if ($("#moreImages").hasClass("hide")) {
            $("#moreImages").slideDown('slow');
            $("#moreImages").removeClass("hide");
            $("#loadMore").removeClass("moreImg");
            $("#loadMore").addClass("lessImg");
        } else {
            $("#moreImages").slideUp('slow');
            $("#moreImages").addClass("hide");
            $("#loadMore").addClass("moreImg");
            $("#loadMore").removeClass("lessImg");
            $('html, body').animate({
                scrollTop: $("#beforeHide").offset().top
            }, 400);
        }
    });
});

slideTimer = setInterval(function () {
    $('#moreImages').slideUp();
    $("#moreImages").addClass("hide");
    $("#loadMore").addClass("moreImg");
    $("#loadMore").removeClass("lessImg");
}, 50000);

// function loadImages() {
//     var img = document.getElementById("moreImages");
//     var load = document.getElementById("loadMore");


//     if (img.classList.contains("hide")) {
//         // img.style.display = "block";
//         load.classList.remove("moreImg");
//         load.classList.add("lessImg");
//         img.classList.remove("hide");
//     } else {
//         // img.style.display = "none";
//         load.classList.add("moreImg");
//         img.classList.add("hide");
//     }

// };

$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });
});


// var loadR;

// function loadRR() {
//     loadR = setTimeout(showPage, 2500);
// }
// function showPage() {
//     document.getElementById("loadPage").style.display = "none";
//     document.getElementById("body").style.height = "100% !important";
//     document.getElementById("root").style.display = "block";
// }

$(document).ready(function () {
    setTimeout(function () {
        $("#loadPage").slideUp('slow');
        // $("#root").slideDown('slow');
        $('body').css('height', '100% !important');
        $('#root').css('display', 'block');
    }, 4000);

});