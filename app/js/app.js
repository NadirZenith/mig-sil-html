$(function () {
    //fade initial page show
    $('html').animate({
        opacity: 1
    }, 1000);

    //hide navbar on menu click
    $('.nav a').on('click', function () {
        $('.navbar-toggle').click();
    });

    //add popover to slider gallery
    //requires html
    $('a[rel=popover]').on("click", function () {
        var img_src = $(this).find('img').attr('src');
        $('#modalimagepreview').attr('src', img_src); // here asign the image to the modal when the user click the enlarge link
        $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
    });

    //form
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

var waypoint = new Waypoint({
    element: document.getElementById('home'),
    offset: -50,
    handler: function (direction) {
        if ('down' === direction) {
            $('body').addClass('main-img-left');
            $('#main-img').attr('src', 'img/twist.png');
        } else {
            $('body').removeClass('main-img-left');
            $('#main-img').attr('src', 'img/normal.png');
        }
    }
});