/**
 * Created by skazzi on 9.5.15..
 */

$(document).ready(function()
{
    var openedSection = $("#algo_helloWorld");


    $("#algo_helloWorld").click(function(){
        switchFocus(openedSection, $("#algo_helloWorld"));
    });

    // todo
    $("#algo_backtracking").click(function(){
        switchFocus(openedSection, $("#algo_backtracking"));
        // loading content
        $("#algorithmCode").fadeOut("slow", function(){
            $("#content").remove();
            $("#algorithmCode").load("algo_backtracking.txt");
            $("#algorithmCode").fadeIn("slow");
        });

    });


    // DIVIDE AND CONQUER
    $("div#divideAndConquerContent").hide();        // hides DnC content
    var divideConquerOpened = false;
    $("#algo_divideconquer").click(function () {

        switchFocus(openedSection, $("#algo_divideconquer"));

        if (divideConquerOpened) {
            $("div#divideAndConquerContent").slideUp("slow");
        }
        else {
            $("div#divideAndConquerContent").slideDown("slow");
            Materialize.showStaggeredList('#divideAndConquerContent');
        }
        divideConquerOpened = !divideConquerOpened;
    });


    // switches focus from tabs
    function switchFocus(currentlyActive, whatToActivate) {
        currentlyActive.removeClass("active blue");
        currentlyActive.addClass("blue-text");
        whatToActivate.addClass("active blue");
        whatToActivate.removeClass("blue-text");
        openedSection = whatToActivate;
    }

    $("#src_quicksort").click(function () {

        $.ajax({
            url: "src_quicksort.txt",
            dataType: "text",
            type: "GET",
            success: function (data) {
                $("div#srcShow").empty();
                //TODO implement asynchronised gists loading...tried already but took me way too much time
            },
            statusCode: {
                404: function () {
                    alert("page not found");
                }
            }
        });

    });



});