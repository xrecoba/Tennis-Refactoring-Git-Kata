'use strict';

function getScore(pointsFirstPlayer, pointsSecondPlayer) {
    var score = "";
    var tempScore = 0;
    if (pointsFirstPlayer === pointsSecondPlayer) {
        switch (pointsFirstPlayer) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (pointsFirstPlayer >= 4 || pointsSecondPlayer >= 4) {
        var minusResult = pointsFirstPlayer - pointsSecondPlayer;
        if (minusResult === 1) {score = "Advantage player1";}
        else if (minusResult === -1) {score = "Advantage player2";}
        else if (minusResult >= 2) {score = "Win for player1";}
        else {score = "Win for player2";}
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) {tempScore = pointsFirstPlayer;}
            else {
                score += "-";
                tempScore = pointsSecondPlayer;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
}

module.exports = getScore;
