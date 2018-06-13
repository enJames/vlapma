$(document).ready(() => {
    // Disable back button
    disableBackButton();

    // Display page info
    $('#questionCount').text(`${questionNumber + 1}
        of ${$('.question-wrapper').length}`);

    // Move to next question
    $('#next').click(goToNextQuestion);

    // Move to previous question
    $('#back').click(goToPreviousQuestion);

    $('#finish').click(submitTest);
});
