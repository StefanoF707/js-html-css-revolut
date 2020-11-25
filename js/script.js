$(document).ready(
    function () {

        var links = $("#header-right li > a");
        var cascadingMenu = $(".cascading-menu");
        var cascadingMenuLinks = $(".cascading-menu a")

        links.click(
            function () {
                $(this).next().toggle(200);
            }
        );

        links.mouseenter(
            function() {
                $(this).css("color", "black");
                $(this).next().toggle(200,
                    function () {
                        cascadingMenu.css("display", "none");
                        $(this).css("display", "block");
                    }
                );
            }
        );

        cascadingMenuLinks.mouseleave(
            function () {
                $(this).css("color", "inherit");
            }
        );









    }
);
