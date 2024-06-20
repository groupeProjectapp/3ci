$(document).ready(function () {
    let isLoad = true
    if (isLoad) {
        setTimeout(function () {
            $(".its_background").fadeOut(500, function () {
                $(".its_background").removeClass("pre")
                $(".its_background").fadeIn(1000, function () {
                    setTimeout(function () {
                        $(".background").fadeOut(800, function () {
                            $(".site").addClass("show");
                        });
                    }, 100)
                })
            })

        }, 1000)
    }else {
        $(".site").addClass("show");
    }

})