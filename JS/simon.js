/**
 * Created by Amberlee on 5/3/17.
 */

$(document).ready(function () {

    "use strict";

var tiles = [1,2,3,4];
var litTiles = [];



function sequence () {
    litTiles.push(Math.floor(Math.random()*4));
    lightUp()
}
//
// function lightUp() {
//
// }
// //     for (var i = 0; i < litTiles.length; i++) {
// //         id = "#" + litTiles[i];
// //         $(id).animate({
// //             opacity: 0.5
// //         }, litTiles[i] * 800).animate({
// //             opacity: 1
// //         }, 100)
// //     }
// // }
//
// $('.play').on("click", function() {
//     // if(0
//     sequence();
//     setTimeout(lightUp(tiles), 1000);
// })

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