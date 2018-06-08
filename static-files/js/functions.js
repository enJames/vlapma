let questionNumber = 0;
console.log((questionNumber + 1) + '/' + $('.question-wrapper').length);


    if (questionNumber === 0) {
        $('#back').addClass('disable').attr('disabled', true);
    } else {
        $('#back').attr('disabled', false);
    }

const goToNextQuestion = () => {
    questionNumber += 1;

    // Close shutter
    shutter('51%');

    // Show next question after .35 second
    setTimeout(() => {
        showNextQuestion();
        // Update question count
        $('#questionCount').text(`${questionNumber + 1}
            of ${$('.question-wrapper').length}`);

        if ($('#back').attr('disabled')) {
            enableBackButton()
        }

        // Display Next button when user is returning from the last page
        if (questionNumber === ($('.question-wrapper').length - 1)) {
            hideNextShowFinish();
        }

        // Shutter open after .8 second
        setTimeout(() => shutter('0'), 500);
    }, 350);
};

const goToPreviousQuestion = () => {
    questionNumber -= 1;


    // Close shutter
    shutter('51%');

    // Show next question after .35 second
    setTimeout(() => {
        // Display the next question
        showPreviousQuestion();
        $('#questionCount').text(`${questionNumber + 1}
            of ${$('.question-wrapper').length}`);

        if (questionNumber === 0) {
            disableBackButton();
        }

        // Display Next button when user is returning from the last page
        if ($('#next').hasClass('hideButton')) {
            showNextHideFinish();
        }

        // Shutter open after .8 second
        setTimeout(() => shutter('0'), 500);
    }, 350);
};

const shutter = (value) => {
    $('#shutterTop').animate({ height: value }, { duration: '1000'});
    $('#shutterBottom').animate({ height: value }, { duration: '1000'});
}

const showNextQuestion = () => {
    $('.question-wrapper').eq(questionNumber - 1).removeClass('make-visible');
    $('.question-wrapper').eq(questionNumber).addClass('make-visible');
}

const showPreviousQuestion = () => {
    $('.question-wrapper').eq(questionNumber + 1).removeClass('make-visible');
    $('.question-wrapper').eq(questionNumber).addClass('make-visible');
}

const disableBackButton = () => {
    $('#back')
    .removeClass('actionButton')
    .addClass('disable')
    .attr('disabled', true);
}

const enableBackButton = () => {
    $('#back')
    .removeClass('disable')
    .addClass('actionButton')
    .removeAttr('disabled');
}

const hideNextShowFinish = () => {
    $('#next').addClass('hideButton');
    $('#finish').removeClass('hideButton');
}

const showNextHideFinish = () => {
    $('#next').removeClass('hideButton');
    $('#finish').addClass('hideButton');
}
