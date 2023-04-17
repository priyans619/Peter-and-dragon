score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 38) {
        peter = document.querySelector('.peter');
        peter.classList.add('animatePeter');
        setTimeout(() => {
            peter.classList.remove('animatePeter')
        }, 700);
    }
    if (e.keyCode == 39) {
        peter = document.querySelector('.peter');
        peterX = parseInt(window.getComputedStyle(peter, null).getPropertyValue('left'));
        peter.style.left = peterX + 112 + "px";
    }
    if (e.keyCode == 37) {
        peter = document.querySelector('.peter');
        peterX = parseInt(window.getComputedStyle(peter, null).getPropertyValue('left'));
        peter.style.left = (peterX - 112) + "px";
    }


}

setInterval(() => {
    peter = document.querySelector('.peter');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle')

    px = parseInt(window.getComputedStyle(peter, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(peter, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(px - ox);
    offsetY = Math.abs(py - oy);
      
    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play()
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animaion-duration'));
            newDur = aniDur - 0.01;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration:',newDur);

        }, 500);


    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score:" + score;
}




