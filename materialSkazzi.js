$(document).ready(function()
{
    $("div.hamburgerButton").click
    (
        function()
        {
            //$("div.sideMenu").toggle( "slide" , "left" );
            $("div.sideMenu").animate({width:'toggle'}, 250);
            //$("div.sideMenu").slideToggle();
        }
    );


    // TODO add the scroll effect for collapsible list elements


    //


});