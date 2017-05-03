/**
 * Created by Amberlee on 5/3/17.
 */

(function() {
    var btn = document.getElementsByClassName('btn'),
        start = document.getElementById('start'),
        reset = document.getElementById('reset'),
        counter = document.getElementById('counter'),
        pattern = [],
        userPattern = [],
        sound0 = new Audio(''),
        sound1 = new Audio(''),
        sound2 = new Audio(''),
        sound3 = new Audio('');

    function displayCounter() {
        counter.innerHTML = pattern.length;
    }

    function generateNum() {
        return Math.floor(Math.random() * 4);
    }

    for (var i = 0; i < btn.length; i++) {
        btn [i].addEventListener('mouseDown', function(e) {
            e.target.className += " lighten";
            if (e.target.id === 'redButton') {
                sound0.play();
            } else if (e.target.id === 'yellowButton') {
                sound1.play();
            } else if (e.target.id === 'greenButton') {
                sound2.play();
            } else if (e.target.id === 'blueButton') {
                sound3.play();
            }
        });


    start.addEventListener('click', function() {
        if (pattern.length === 0) {
            pattern.push(generateNum());
            displayCounter();
            simulateClick(btn[pattern[0]]);
        }
    });

    reset.addEventListener('click', function() {
        pattern = [];
        userPattern = [];
        displayCounter();
    });

