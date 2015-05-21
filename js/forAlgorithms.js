/**
 * Created by skazzi on 9.5.15..
 */

$(document).ready(function()
{
    var openedSection = $("#algo_helloWorld");

    $("#algo_helloWorld").click(function(){
        openedSection.removeClass("active blue");
        openedSection.addClass("blue-text");
        $(this).addClass("active blue");
        $(this).removeClass("blue-text");
        openedSection = $("#algo_helloWorld");
    });

    // todo
    $("#algo_backtracking").click(function(){
        openedSection.removeClass("active blue");
        openedSection.addClass("blue-text");
        $(this).addClass("active blue");
        $(this).removeClass("blue-text");
        openedSection = $("#algo_backtracking");

        // loading content
        $("#algorithmCode").fadeOut("slow", function(){
            $("#content").remove();
            $("#algorithmCode").load("algo_backtracking.txt");
            $("#algorithmCode").fadeIn("slow");
        });

    });
});