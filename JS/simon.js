/**
 * Created by Amberlee on 5/3/17.
 */

$(document).ready(function () {

    "use strict";

var tiles = [1,2,3,4];
var litTiles = [];



function sequence () {
    litTiles.push(Math.floor(Math.random()*4));
}

    $('.colors').click(function () {
        if ($(this).('id') === tiles.sequence[userSeq]) {
            userSeq++;
            if (userSeq === tiles.sequence.length) {
                //$('#newRound').show();
                userSeq = 0;
                game.level++;
                newSeq();
                $('#btn').text("Level: " + (game.level + 1));
            }
        } else {
            console.log('game over');
            $('#btn').text("Try Again").css('font-size', '1.5rem');
        }
    });

    $('#start').click(function () {
        newGame();
        newSeq();
        $('#btn').text("Level: " + (game.level + 1))
    });

});