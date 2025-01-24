let interval1 = null;
let interval2 = null;
let interval3 = null;
let speedRate = 1.0;

$(function() {
    $('#horse1, #horse2, #horse3, #horse4').css('left', '0px');
    $('#start').click(() =>{
        $('#start, #level').prop('disabled', 'true');
        $('#banner').css('visibility', 'visible')
        timer();
        setTimeout(() => {
            $('#banner').html('START!').css('background-color','#adff5f');
        },3000);
        setTimeout(() => {
            comStart();
            $(document).keyup(e => {
                if (e.originalEvent.code === 'ArrowRight') {
                    const horse4Left = parseInt($('#horse4').css('left').substring(0, $('#horse4').css('left').length-2));
                    if (horse4Left < 840) {
                        $('#horse4').css('left',((horse4Left)+ 15) + 'px')
                    } else if (horse4Left > 820) {
                        alert('You Win!');
                        location.reload();
                    }
                }
            });
        },4000);
    });
    $('#level').change(e => {
        switch (e.target.value) {
            case "easy" :
                speedRate = 1.0;
                break;
            case "normal" :
                speedRate = 1.5;
            break;
            case "hard" :
                speedRate = 2.0;
        } 
    });
    
});

const run = function(horse) {
    const currLeft = parseInt(
        $(horse).css('left').substring(0, $(horse).css('left').length-2)
    );
    if (currLeft > 840) {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
        alert('You Lose!');
        location.reload();
    }
    const distance = Math.ceil(Math.random()*10*speedRate) + 3;
    $(horse).css('left', (currLeft+ distance) + 'px');
};

const comStart = () => {
    $('#banner').css('visibility', 'hidden');
    interval1 = setInterval(run, Math.ceil(Math.random()*50) + 100, $('#horse1'));
    interval2 = setInterval(run, Math.ceil(Math.random()*50) + 100, $('#horse2'));
    interval3 = setInterval(run, Math.ceil(Math.random()*50) + 100, $('#horse3'));
};

const bannerTimer = function() {
    if ($('#banner').html() > 1) {
        $('#banner').fadeOut(500);
        $('#banner').fadeIn();
        $('#banner').html($('#banner').html()-1);
    }
}

const timer = () => {
    $('#banner').fadeOut(1000);
    $('#banner').fadeIn();
    intervalBanner = setInterval(bannerTimer,1000,$('#banner').html());
};