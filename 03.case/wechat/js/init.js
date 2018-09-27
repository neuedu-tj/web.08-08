$(function(){

    $("#signal").load("signal.html");



    $("#menus div").click(function(){
        $("#dynamic").load($(this).data("target") );
    });


    $()[0].attr("src" , $(this).data("icon-press"))

});