$(document).ready(
    function () {

        var links = $("#header-right li > a");
        var cascadingMenu = $(".cascading-menu");

        links.mouseenter(
            function() {
                $(this).css("color", "#000");
                $(this).next().toggle(200,
                    function () {
                        cascadingMenu.hide();
                        $(this).show();
                    }
                );
            }
        );

        links.mouseleave(
            function () {
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
