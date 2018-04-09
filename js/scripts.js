//Back End
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}


function Player() {
    this.resultsArray = [];
    this.total = 0;
}

Player.prototype.calcSum = function () {
    var arraySum = 0;
    for (var i = 0; i < this.resultsArray.length; i++) {
        arraySum += parseInt(this.resultsArray[i]);
    };
    return arraySum;
}


$(document).ready(function () {

});