
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });


    $(document).ready(function () {
        // Attach Button click event listener 
        $("#loginModalButton").click(function () {

            // show Modal
            $('#loginModal').modal('show');
        });
    });

    $(document).ready(function () {
        // Attach Button click event listener 
        $("#reserveModalButton").click(function () {

            // show Modal
            $('#reserveModal').modal('show');
        });
    });
