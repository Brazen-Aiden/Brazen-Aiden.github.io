function changeButton(tabID) 
{
    
    var i, tabcolor, tabhovered, tabcolortriggered;
    //Set default tab colors, fonts, and tab images
    tabcolor = document.getElementsByClassName("header-page");
    for (i = 0; i < tabcolor.length; i++) {
        tabcolor[i].style.backgroundColor = "#c8f7fc";
        tabcolor[i].style.borderColor = "#2ca7cc";
        tabcolor[i].style.height = "140px";
        tabcolor[i].style.width = "140px";
        tabcolor[i].firstElementChild.style.display = "inline-block";
        tabcolor[i].lastChild.style.display = "none";
        tabcolor[i].nextElementSibling.style.color = "#2ca7cc";
        tabcolor[i].nextElementSibling.style.fontSize  = "24px";

        tabcolor[i].removeAttribute("tabPressed");
    }

    //set triggered tab colors, fonts, and tab images
    tabcolortriggered = document.getElementById(tabID);
    tabcolortriggered.style.backgroundColor = "#FD3B01";
    tabcolortriggered.style.borderColor = "#FFDCD1";
    tabcolortriggered.firstElementChild.style.display = "none";
    tabcolortriggered.lastChild.style.display = "inline-block";
    tabcolortriggered.nextElementSibling.style.color = "#FD3B01";
    tabcolortriggered.nextElementSibling.style.fontSize  = "1.6em";
    tabcolortriggered.setAttribute("tabPressed", "");
  }

  function hoverTab(tabID) 
  {
    var tabtriggered;
    //set triggered tab colors, fonts, and tab images
    tabtriggered = document.getElementById(tabID);
    tabtriggered.style.backgroundColor = "#FD3B01";
    tabtriggered.style.borderColor = "#FFDCD1";
    tabtriggered.firstElementChild.style.display = "none";
    tabtriggered.lastChild.style.display = "inline-block";
    tabtriggered.nextElementSibling.style.color = "#FD3B01";
    tabtriggered.nextElementSibling.style.fontSize  = "1.6em";
  
  }
  
  function unhoverTab(tabID) 
  {
    var tabtriggered;
    //set triggered tab colors, fonts, and tab images
    tabtriggered = document.getElementById(tabID);

    if(!tabtriggered.hasAttribute("tabPressed"))
    {
      tabtriggered.style.backgroundColor = "#c8f7fc";
      tabtriggered.style.borderColor = "#2ca7cc";
      tabtriggered.style.height = "140px";
      tabtriggered.style.width = "140px";
      tabtriggered.firstElementChild.style.display = "inline-block";
      tabtriggered.lastChild.style.display = "none";
      tabtriggered.nextElementSibling.style.color = "#2ca7cc";
      tabtriggered.nextElementSibling.style.fontSize  = "24px";
    }
  }
  

  changeButton('projects'); 