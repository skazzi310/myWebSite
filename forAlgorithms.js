/**
 * Created by skazzi on 8.5.15..
 */

$(document).ready(function() {

    // SIDE MENU ANIMATION AND CONTENT CHANGE
    var currentlyActive = $("#algo_helloWorld");        // initially hello world is displayed
    $("#algo_backtracking_subpanel").hide();
    $("#algo_graphs_subpanel").hide();

    $("#algo_backtracking").click(
        function () {
            alert("you clicked me");
            if (!$(this).hasClass("#active")) {
                $(this).addClass("#active");
                currentlyActive.removeClass("active");
                currentlyActive = $(this);
                $("#content").html("<script src='https://gist.github.com/skazzi310/d1c5c340b79e40aeb57c.js'></script>");
            }
        }
    );

});