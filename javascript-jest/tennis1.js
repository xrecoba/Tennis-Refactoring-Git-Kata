'use strict';

function getScore(pointsFirstPlayer, pointsSecondPlayer) {
    var score = "";
    var tempScore = 0;
    if (pointsFirstPlayer === pointsSecondPlayer) {
        evenResult(pointsFirstPlayer);
    } else if (pointsFirstPlayer >= 4 || pointsSecondPlayer >= 4) {
        lateGameResult(pointsFirstPlayer, pointsSecondPlayer);
    } else {
        earlyGameResult(pointsFirstPlayer, pointsSecondPlayer);
    }
    return score;

    function earlyGameResult(pointsFirstPlayer, pointsSecondPlayer) {
        for (var i = 1; i < 3; i++) {
            if (i === 1) { tempScore = pointsFirstPlayer; }
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

    function lateGameResult(pointsFirstPlayer, pointsSecondPlayer) {
        var minusResult = pointsFirstPlayer - pointsSecondPlayer;
        if (minusResult === 1) { score = "Advantage player1"; }
        else if (minusResult === -1) { score = "Advantage player2"; }
        else if (minusResult >= 2) { score = "Win for player1"; }
        else { score = "Win for player2"; }
    }

    function evenResult(pointsFirstPlayer) {
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
    }
}

module.exports = getScore;
