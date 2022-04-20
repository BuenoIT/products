function start() {
  $('#start').hide();

  $('#backGame').append("<div id='player' class='animation1'></div>");
  $('#backGame').append("<div id='enemy1' class='animation2'></div>");
  $('#backGame').append("<div id='enemy2'></div>");
  $('#backGame').append("<div id='friend' class='animation3'></div>");
  $('#backGame').append("<div id='score'></div>");
  $('#backGame').append("<div id='energy'></div>");

  var game = {};
  var endGame = false;
  var points = 0;
  var saved = 0;
  var lost = 0;
  var speed = 5;
  var currentEnergy = 3;
  var positionY = parseInt(Math.random() * 334);
  var KEY = {
    W: 87,
    S: 83,
    D: 68,
  };
  var canShot = true;
  var soundShot = document.getElementById('soundShot');
  var soundExplosion = document.getElementById('soundExplosion');
  var music = document.getElementById('music');
  var soundGameOver = document.getElementById('soundGameOver');
  var soundLost = document.getElementById('soundLost');
  var soundRescue = document.getElementById('soundRescue');

  music.addEventListener(
    'ended',
    function () {
      music.currentTime = 0;
      music.play();
    },
    false
  );
  music.play();

  game.cliked = [];

  $(document).keydown(function (e) {
    game.cliked[e.which] = true;
  });

  $(document).keyup(function (e) {
    game.cliked[e.which] = false;
  });

  game.timer = setInterval(loop, 30);

  function loop() {
    moveBackground();
    movePlayer();
    moveEnemy1();
    moveEnemy2();
    moveFriend();
    collision();
    score();
    energy();
  }

  function movePlayer() {
    if (game.cliked[KEY.W]) {
      var top = parseInt($('#player').css('top'));
      $('#player').css('top', top - 10);

      if (top <= 0) {
        $('#player').css('top', top + 10);
      }
    }

    if (game.cliked[KEY.S]) {
      var top = parseInt($('#player').css('top'));
      $('#player').css('top', top + 10);

      if (top >= 434) {
        $('#player').css('top', top - 10);
      }
    }

    if (game.cliked[KEY.D]) {
      shot();
    }
  }

  function moveEnemy1() {
    positionX = parseInt($('#enemy1').css('left'));
    $('#enemy1').css('left', positionX - speed);
    $('#enemy1').css('top', positionY);

    if (positionX <= 0) {
      positionY = parseInt(Math.random() * 334);
      $('#enemy1').css('left', 694);
      $('#enemy1').css('top', positionY);
    }
  }

  function moveEnemy2() {
    positionX = parseInt($('#enemy2').css('left'));
    $('#enemy2').css('left', positionX - 3);

    if (positionX <= 0) {
      $('#enemy2').css('left', 775);
    }
  }

  function moveFriend() {
    positionX = parseInt($('#friend').css('left'));
    $('#friend').css('left', positionX + 1);

    if (positionX > 906) {
      $('#friend').css('left', 0);
    }
  }

  function shot() {
    if (canShot == true) {
      soundShot.play();
      canShot = false;

      top1 = parseInt($('#player').css('top'));
      positionX = parseInt($('#player').css('left'));
      shotX = positionX + 190;
      topShot = top1 + 37;
      $('#backGame').append("<div id='shot'></div>");
      $('#shot').css('top', topShot);
      $('#shot').css('left', shotX);

      var timeShot = window.setInterval(executeShot, 30);
    }

    function executeShot() {
      positionX = parseInt($('#shot').css('left'));
      $('#shot').css('left', positionX + 15);
      if (positionX > 900) {
        window.clearInterval(timeShot);
        timeShot = null;
        $('#shot').remove();
        canShot = true;
      }
    }
  }

  function collision() {
    var collision1 = $('#player').collision($('#enemy1'));
    var collision2 = $('#player').collision($('#enemy2'));
    var collision3 = $('#shot').collision($('#enemy1'));
    var collision4 = $('#shot').collision($('#enemy2'));
    var collision5 = $('#player').collision($('#friend'));
    var collision6 = $('#enemy2').collision($('#friend'));

    if (collision1.length > 0) {
      currentEnergy--;
      enemy1X = parseInt($('#enemy1').css('left'));
      enemy1Y = parseInt($('#enemy1').css('top'));
      explosion1(enemy1X, enemy1Y);

      positionY = parseInt(Math.random() * 334);
      $('#enemy1').css('left', 694);
      $('#enemy1').css('top', positionY);
    }

    if (collision2.length > 0) {
      currentEnergy--;
      enemy2X = parseInt($('#enemy2').css('left'));
      enemy2Y = parseInt($('#enemy2').css('top'));
      explosion2(enemy2X, enemy2Y);

      $('#enemy2').remove();

      changePositionEnemy2();
    }

    if (collision3.length > 0) {
      points = points + 100;
      speed = speed + 0.3;
      enemy1X = parseInt($('#enemy1').css('left'));
      enemy1Y = parseInt($('#enemy1').css('top'));
      explosion1(enemy1X, enemy1Y);
      $('#shot').css('left', 950);

      positionY = parseInt(Math.random() * 334);
      $('#enemy1').css('left', 694);
      $('#enemy1').css('top', positionY);
    }

    if (collision4.length > 0) {
      points = points + 50;
      enemy2X = parseInt($('#enemy2').css('left'));
      enemy2Y = parseInt($('#enemy2').css('top'));
      $('#enemy2').remove();

      explosion2(enemy2X, enemy2Y);
      $('#shot').css('left', 950);

      changePositionEnemy2();
    }

    if (collision5.length > 0) {
      saved++;
      soundRescue.play();
      changePositionFriend();
      $('#friend').remove();
    }

    if (collision6.length > 0) {
      lost++;
      friendX = parseInt($('#friend').css('left'));
      friendY = parseInt($('#friend').css('top'));
      explosion3(friendX, friendY);
      $('#friend').remove();

      changePositionFriend();
    }
  }

  function changePositionEnemy2() {
    var timeCollision4 = window.setInterval(changePosition4, 5000);

    function changePosition4() {
      window.clearInterval(timeCollision4);
      timeCollision4 = null;

      if (endGame == false) {
        $('#backGame').append('<div id=enemy2></div>');
      }
    }
  }

  function changePositionFriend() {
    var timeFriend = window.setInterval(changePosition6, 6000);

    function changePosition6() {
      window.clearInterval(timeFriend);
      timeFriend = null;

      if (endGame == false) {
        $('#backGame').append("<div id='friend' class='animation3'></div>");
      }
    }
  }

  function explosion2(enemy2X, enemy2Y) {
    soundExplosion.play();
    $('#backGame').append("<div id='explosion2'></div>");
    $('#explosion2').css('background-image', 'url(imgs/explosion.png)');
    var div2 = $('#explosion2');
    div2.css('top', enemy2Y);
    div2.css('left', enemy2X);
    div2.animate({ width: 200, opacity: 0 }, 'slow');

    var timeExplosion2 = window.setInterval(removeExplosion2, 1000);

    function removeExplosion2() {
      div2.remove();
      window.clearInterval(timeExplosion2);
      timeExplosion = null;
    }
  }

  function explosion1(enemy1X, enemy1Y) {
    soundExplosion.play();
    $('#backGame').append("<div id='explosion1'></div>");
    $('#explosion1').css('background-image', 'url(imgs/explosion.png)');
    var div = $('#explosion1');
    div.css('top', enemy1Y);
    div.css('left', enemy1X);
    div.animate({ width: 200, opacity: 0 }, 'slow');

    var timeExplosion = window.setInterval(removeExplosion, 1000);

    function removeExplosion() {
      div.remove();
      window.clearInterval(timeExplosion);
      timeExplosion = null;
    }
  }

  function explosion3(friendX, friendY) {
    soundLost.play();
    $('#backGame').append("<div id='explosion3' class='animation4'></div>");
    $('#explosion3').css('top', friendY);
    $('#explosion3').css('left', friendX);
    var timeExplosion3 = window.setInterval(resetExplosion3, 1000);
    function resetExplosion3() {
      $('#explosion3').remove();
      window.clearInterval(timeExplosion3);
      timeExplosion3 = null;
    }
  }

  function score() {
    $('#score').html(
      '<h2> Points: ' +
        points +
        ' Rescued: ' +
        saved +
        ' Lost: ' +
        lost +
        '</h2>'
    );
  }

  function moveBackground() {
    left = parseInt($('#backGame').css('background-position'));
    $('#backGame').css('background-position', left - 1);
  }

  function energy() {
    if (currentEnergy == 3) {
      $('#energy').css('background-image', 'url(imgs/energy3.png');
    }
    if (currentEnergy == 2) {
      $('#energy').css('background-image', 'url(imgs/energy2.png');
    }
    if (currentEnergy == 1) {
      $('#energy').css('background-image', 'url(imgs/energy1.png');
    }
    if (currentEnergy == 0) {
      $('#energy').css('background-image', 'url(imgs/energy0.png');

      gameOver();
    }
  }

  function gameOver() {
    endGame = true;
    music.pause();
    soundGameOver.play();

    window.clearInterval(game.timer);
    game.timer = null;

    $('#player').remove();
    $('#enemy1').remove();
    $('#enemy2').remove();
    $('#friend').remove();

    $('#backGame').append("<div id='end'></div>");

    $('#end').html(
      '<h1> Game Over </h1><p> Your final score: ' +
        points +
        '</p>' +
        "<div id-'restart' onClick=restartGame()><h3>Play Again</h3></div>"
    );
  }
}

function restartGame() {
  soundGameOver.pause();
  $('#end').remove();
  start();
}
