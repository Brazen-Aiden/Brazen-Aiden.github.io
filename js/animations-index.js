
var contentQuery = document.querySelector(".profile");

var currentHeight = contentQuery.offsetHeight;

var contentElements = document.getElementsByClassName("profile");

contentElements[0].style.height = "100px";

$(".profile-top-container").delay(250).show();
$(".aboutme-text").delay(250).show();

$(".profile").animate({height: currentHeight}, "slow", function(){
    $(".footer").animate({opacity: 1}, 500);

    var element = document.querySelector(".profile");
    element.style.removeProperty("height");
});



