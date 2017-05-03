/**
 * Created by Amberlee on 5/3/17.
 */


// $(document).ready(function(){
    "use strict";


    var game = {
        possibleSeq : ['blue', 'red', 'yellow', 'green'],
        currentSeq : [],
        level: 0
    };

    var userSeq = [];



    function newSeq(){
        game.currentSeq.push(game.possibleSeq[(Math.floor(Math.random()*4))]);
        console.log(game.currentSeq);
    }

    function tryAgain() {
        game.currentSeq = [];
        game.level = 0;
    }

    function animateSeq(selector){
        $('#' + game.currentSeq).animate({
            opacity: 0.5
        }, 500).animate({
            opacity: 1
        }, 500)
    }




    $('.colors').click(function () {
        if ($(this).attr('id') === game.currentSeq[userSeq++]) {
            if (userSeq === game.currentSeq.length) {
                console.log("success");
                $('#newRound').show();
            }
        }
    });




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


