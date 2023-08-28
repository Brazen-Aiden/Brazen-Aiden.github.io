function openCloseInfo(infoClass, popupid) 
{
    var infoclicked;

    infoclicked = document.getElementsByClassName(infoClass);

    if(infoclicked[0].hasAttribute("infoPressed"))
    {
        infoclicked[0].style.display = "none"; 


        infoclicked[0].removeAttribute("infoPressed");
    }
    else
    {
        infoclicked[0].style.display = "block"; 

        infoclicked[0].setAttribute("infoPressed", "");
    }
}


function hoverInfo(infoItemClass, popupid) 
{
  var infohovered;

  infohovered = document.getElementsByClassName(infoItemClass);
  infohovered[0].style.color = "#FD3B01";

  var popup = document.getElementById(popupid);
  popup.classList.toggle("show");
}
  
function unhoverInfo(infoItemClass, popupid) 
{
    var infounhovered;

    infounhovered = document.getElementsByClassName(infoItemClass);
    infounhovered[0].style.color = "#2ca7cc";

    var popup = document.getElementById(popupid);
  popup.classList.toggle("show");
}