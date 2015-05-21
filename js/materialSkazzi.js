$(document).ready(function()
{
    var hamListOpened = false;
    $("#hamb_list").hide();

    $("div.hamburgerButton").click
    (
        function()
        {
            // if panel is opened, we need to hide the text before sliding panel out
            if(hamListOpened)
                $("#hamb_list").slideUp(150);

            $("div.sideMenu").animate({width:'toggle'}, 450, function(){
                if(!hamListOpened)
                    $("#hamb_list").slideDown(150);
                hamListOpened = ! hamListOpened;
            });

        }
    );

    //$("div.sideMenu").toggle( "slide" , "left" );
    //$("div.sideMenu").slideToggle();
});