$(document).ready(() => {
    const questionNumber = 1;
    $('#next').click(() => {
        // Add height
        $('#shutterTop').animate({ height: '51%' }, { duration: '1000'});
        $('#shutterBottom').animate({ height: '51%' }, { duration: '1000'});

        setTimeout(() => {
            $('#shutterTop').animate({ height: '0' }, { duration: '1000'});
            $('#shutterBottom').animate({ height: '0' }, { duration: '1000'});
        }, 800);
    });

    $('#back').click(() => {
        // Add height
        $('#shutterTop').animate({ height: '51%' }, { duration: '1000'});
        $('#shutterBottom').animate({ height: '51%' }, { duration: '1000'});

        setTimeout(() => {
            $('#shutterTop').animate({ height: '0' }, { duration: '1000'});
            $('#shutterBottom').animate({ height: '0' }, { duration: '1000'});
        }, 800);
    });
});
