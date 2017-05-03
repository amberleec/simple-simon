/**
 * Created by Amberlee on 5/3/17.
 */


    "use strict";


    var game = {
        possibleSeq : ['blue', 'red', 'yellow', 'green'],
        currentSeq : [],
        level: 0
    };

    function newSeq(){
        game.currentSeq.push(game.possibleSeq[(Math.floor(Math.random()*4))]);
        console.log(game.currentSeq);
    }


    $('#beginGame').click(function () {
        newGame();
        newSeq();
        animateSeq();
    });

    $('#blueButton').click(function () {
        animateSeq('#blueButton');
    });

    $('#yellowButton').click(function () {
        animateSeq('#yellowButton');
    });

    $('#greenButton').click(function () {
        animateSeq('#greenButton');
    });

    $('#redButton').click(function () {
        animateSeq('#redButton');
    });

    $('#tryAgain').click(function () {
        $('#tryAgain').hide();
        newSeq();
        animateSeq();
    });


