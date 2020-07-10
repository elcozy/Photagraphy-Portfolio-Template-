// easyscroll 
// easyScrollDots({

//     // sets to true if you have a fixed navigation
//     'fixedNav': true,

//     // unique ID of your fixed navigation
//     'fixedNavId': 'myNavbar',

//     // set to true if your navigation is only sticky when scrolling up
//     'fixedNavUpward': false

// });


// nav bar blurr on scroll 
// var myNav = document.getElementById('myNavbar');
// window.onscroll = function () {
//     "use strict";
//     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
//         myNav.classList.add("nav-blurred");
//         myNav.classList.remove("nav-transparent");
//     }
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-blurred");
//     }
// };

// load more 
function loadImages() {
    var img = document.getElementById("moreImages");
    var load = document.getElementById("loadMore");


    if (img.style.display === "none") {
        img.style.display = "inline-block";
        load.classList.remove("moreImg");
    } else {
        img.style.display = "none";
        load.classList.add("moreImg");
    }

};


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


