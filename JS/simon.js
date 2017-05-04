/**
 * Created by Amberlee on 5/3/17.
 */


    "use strict";

var tiles = [1,2,3,4];
var litTiles = [];

function lightUp(arr){
    for(let i=0; i< arr.length; i++){
        let id ="#" + arr[i];
        $(id).animate({
            opacity: 0.5
        },arr[i] * 800).animate({
            opacity: 1
        }, 100)
    }
}

$('.play').on("click", function(){
    setTimeout(lightUp(tiles), 1000);
});


