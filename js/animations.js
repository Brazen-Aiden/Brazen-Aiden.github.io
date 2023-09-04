
var mainP = $(".transition-main p");

mainP.animate({opacity: '0.5'}, "slow");

var mainH1 = $(".transition-main h1");

mainH1.animate({opacity: '0.5'}, "slow");

var main = $(".transition-main");

var currentWidth = $(window).width();

if(currentWidth < 990)
{
    main.animate({top: '5px', width: '100%', opacity: '1'}, 750, function(){
        $(".footer").animate({opacity: 1}, 500);
        $(".profile-container").animate({opacity: 1}, 500);
    });
}
else
{
    main.animate({top: '5px', width: '90%', opacity: '1'}, 750, function(){
        $(".footer").animate({opacity: 1}, 500);
        $(".profile-container").animate({opacity: 1}, 500);
    });
}


mainP.animate({opacity: '1'}, "fast");

mainH1.animate({opacity: '1'}, "fast");
