/**
 * Created by Amberlee on 5/3/17.
 */

$(document).ready(function () {

    "use strict";

var tiles = [1,2,3,4];
var litTiles = [];
var id;


function sequence () {
    litTiles.push(Math.floor(Math.random()*4));
    lightUp()
}

function lightUp() {

}
//     for (var i = 0; i < litTiles.length; i++) {
//         id = "#" + litTiles[i];
//         $(id).animate({
//             opacity: 0.5
//         }, litTiles[i] * 800).animate({
//             opacity: 1
//         }, 100)
//     }
// }

$('.play').on("click", function() {
    // if(0
    sequence();
    setTimeout(lightUp(tiles), 1000);
})


});