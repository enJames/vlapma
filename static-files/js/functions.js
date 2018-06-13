let questionNumber = 0;

const goToNextQuestion = () => {
    if (!$(`input[name=ques${questionNumber + 1}]:checked`).val()) {
        displayMessage('Please make a selection');
    } else {
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
    }
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

const submitTest = () => {
    if (!$(`input[name=ques${questionNumber + 1}]:checked`).val()) {
        displayMessage('Please make a selection');
    } else {
        $('.dim').css({
            'z-index': '9999',
            'opacity': '1'
        });
        const pmaData = $('#pmatest').serializeArray();
        console.log(pmaData);
        SendUserInfo('localhost', pmaData, $('#message'));
    }
};

const shutter = (value) => {
    $('#shutterTop').animate({ height: value }, { duration: '1000'});
    $('#shutterBottom').animate({ height: value }, { duration: '1000'});
};

const showNextQuestion = () => {
    $('.question-wrapper').eq(questionNumber - 1).removeClass('make-visible');
    $('.question-wrapper').eq(questionNumber).addClass('make-visible');
};

const showPreviousQuestion = () => {
    $('.question-wrapper').eq(questionNumber + 1).removeClass('make-visible');
    $('.question-wrapper').eq(questionNumber).addClass('make-visible');
};

const disableBackButton = () => {
    $('#back')
    .removeClass('actionButton')
    .addClass('disable')
    .attr('disabled', true);
};

const enableBackButton = () => {
    $('#back')
    .removeClass('disable')
    .addClass('actionButton')
    .removeAttr('disabled');
};

const hideNextShowFinish = () => {
    $('#next').addClass('hideButton');
    $('#finish').removeClass('hideButton');
};

const showNextHideFinish = () => {
    $('#next').removeClass('hideButton');
    $('#finish').addClass('hideButton');
};

const displayMessage = (message) => {
    // Display message
    $('#errorMessage').css('top', '25%').text(message);

    // Take message off screen after 1.5 seconds
    setTimeout(() => $('#errorMessage').css('top', '-10%'), 2000);
};

const SendUserInfo = (url, data, element) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        console.log(data[0].name);
        if (xhr.readyState === 4 && xhr.status === 201) {
            location.href = xhr.responseURL;
        } else {
            if (data[0].name === 'firstname') {
                location.href = 'https://enjames.github.io/vlapma/views/pmatest.html';
            } else {
                location.href = 'https://enjames.github.io/vlapma/views/thankyou.html';
            }
            // element.html('Oops! There was a problem. Please <a href="file:///F:/Clients/VLA/app/views/introduction.html">try again</a>'
        }
        console.log(xhr);
    }

    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(data));
}
