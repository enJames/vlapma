$(document).ready(() => {
    $('#proceed').click(() => {
        // Change element position
        $('.pmatest-intro').css('left', '-150%');
        $('.user-intro').css('top', '50%');

        // Change button
        $('#proceed').css('display', 'none');
        $('#start').css('display', 'inline-block');
    });

    $('#start').click(() => {
        $('.dim').css({
            'z-index': '9999',
            'opacity': '1'
        });
        const userDetails = $('#userDetails').serializeArray();
        console.log(userDetails);
        SendUserInfo('localhost', userDetails, $('#message'));
    });

});
