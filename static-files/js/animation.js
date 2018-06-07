$(document).ready(() => {
    // Disable back button
    disableBackButton();

    // Move to next question
    $('#next').click(goToNextQuestion);

    // Move to previous question
    $('#back').click(goToPreviousQuestion);
});
