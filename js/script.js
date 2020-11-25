$(document).ready(
    function () {

        var links = $("#header-right li > a");
        var cascadingMenu = $(".cascading-menu");

        // links.hover(
        //     function () {
        //         $(this).css("color", "black");
        //         cascadingMenu.css("display", "none");
        //         $(this).next().toggle(200);
        //     }, function () {
        //         $(this).css("color", "inherit");
        //     }
        // );

        links.mouseenter(
            function() {
                $(this).css("color", "black");
                cascadingMenu.css("display", "none");
                $(this).next().toggle(200);
            }
        );

        links.mouseleave(
            function() {
                $(this).css("color", "inherit");
            }
        );

        links.click(
            function () {
                $(this).next().toggle(200);
            }
        );






    }
);
