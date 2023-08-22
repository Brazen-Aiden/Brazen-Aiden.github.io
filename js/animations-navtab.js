
var mainP = $(".transition-main p");

mainP.animate({opacity: '0.5'}, "slow");

var mainH1 = $(".transition-main h1");

mainH1.animate({opacity: '0.5'}, "slow");

var main = $(".transition-main");

main.animate({top: '75px', width: '80%', opacity: '1'}, 750);


mainP.animate({opacity: '1'}, "fast");

mainH1.animate({opacity: '1'}, "fast");
