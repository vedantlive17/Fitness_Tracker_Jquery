$(window).on('load', function () {
    $('.slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.slick-card').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    const CALORIES_PER_REP = 5;
    const WEEK_MULTIPLIER = 7; 
    const MONTH_MULTIPLIER = 30;

    function updateCalories() {
        let totalRepsToday = 0;
        $('.rep-count').each(function() {
            totalRepsToday += parseInt($(this).text());
        });

        let dailyCalories = totalRepsToday * CALORIES_PER_REP;
        $('.today-calories').text(dailyCalories);
        $('.week-calories').text((dailyCalories * WEEK_MULTIPLIER));
        $('.month-calories').text((dailyCalories * MONTH_MULTIPLIER));
    }

    function updateExercise(card, increment) {
        var $repCount = card.find('.rep-count').first();
        var reps = parseInt($repCount.text()) + increment;

        reps = Math.max(reps, 0);
        $repCount.text(reps);

        updateCalories();
    }

    $('.plus-btn').click(function() {
        var $card = $(this).closest('.card');
        updateExercise($card, 1);
    });

    $('.minus-btn').click(function() {
        var $card = $(this).closest('.card');
        updateExercise($card, -1);
    });
    function addLeadingZeros(n) {
        return (n < 10) ? ("0" + n) : "" + n;
    }

    function generateDates(daysBefore, daysAfter) {
        var $dateContainer = $('.date-container');
        var today = new Date();

        $dateContainer.empty();

        for (var i = daysBefore; i > 0; i--) {
            var pastDate = new Date();
            pastDate.setDate(today.getDate() - i);
            $dateContainer.append('<h1 class="p-date">' +
                addLeadingZeros(pastDate.getMonth() + 1) + '/' +
                addLeadingZeros(pastDate.getDate()) + '</h1>');
        }
        $dateContainer.append('<h1 class="date is-today">' + 'Today' + '</h1>');

        for (var i = 1; i <= daysAfter; i++) {
            var futureDate = new Date();
            futureDate.setDate(today.getDate() + i);
            $dateContainer.append('<h1 class="f-date">' +
                addLeadingZeros(futureDate.getMonth() + 1) + '/' +
                addLeadingZeros(futureDate.getDate()) + '</h1>');
        }
    }

    generateDates(2, 2);

    $('.slick-card').addClass('nudge-animation');

    setTimeout(function() {
        $('.swipe-left-indicator').hide();
    }, 2000);

    $('.abs-card').show();

    function showCard(cardSelector, iconId) {
        $('.abs-card, .chest-card, .calves-card, .hamstring-card, .shoulder-card, .pelcs-card, .tricep-card, .back-card').hide();
        $('.b-icons img').removeClass('active-icon');
        $(cardSelector).show();
        $('#' + iconId).addClass('active-icon');
    }

    $('#abs-icon').click(function() {
        showCard('.abs-card', 'abs-icon');
    });

    $('#chest-icon').click(function() {
        showCard('.chest-card', 'chest-icon');
    });

    $('#calves-icon').click(function() {
        showCard('.calves-card', 'calves-icon');
    });

    $('#hamstring-icon').click(function() {
        showCard('.hamstring-card', 'hamstring-icon');
    });

    $('#shoulder-icon').click(function() {
        showCard('.shoulder-card', 'shoulder-icon');
    });
    
    $('#pelcs-icon').click(function() {
        showCard('.pelcs-card', 'pelcs-icon');
    });

    $('#tricep-icon').click(function() {
        showCard('.tricep-card', 'tricep-icon');
    });

    $('#back-icon').click(function() {
        showCard('.back-card', 'back-icon');
    });

    showCard('.abs-card', 'abs-icon');
});

