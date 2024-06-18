$(document).ready(function () {

    function eventTransition($theEvent) {
        $(".the_event").removeClass("post").addClass("pre").css("width", 6, 'rem');

        setTimeout(function () {
            $theEvent.find('.event_title').css('opacity', 0);
            var totalElements = $('.events_list .the_event').length;
            var containerWidth = $('.events_list').width();
            var availableSpace = containerWidth - (0.4 * (totalElements - 1));

            $theEvent.css('width', availableSpace + 'px');

            setTimeout(function () {
                $theEvent.addClass("post").removeClass("pre");
                $(".post > .event_content > *").css("opacity", 0)
                setTimeout(function () {
                    $(".post > .event_content > *").css("opacity", 1)
                    $theEvent.find('.event_title').css('opacity', 1);

                }, 10)
            }, 1000); // Use setTimeout to ensure the class change is applied after the width change
        }, 30)
    }

    $(".the_event").click(function () {
        if (!$(this).hasClass("post")) {
            eventTransition($(this));
        }
    });
});

