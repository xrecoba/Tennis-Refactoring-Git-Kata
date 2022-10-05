'use strict';

function getScore(pointsFirstPlayer, pointsSecondPlayer) {
    
    if (pointsFirstPlayer === pointsSecondPlayer) {
        return evenResult(pointsFirstPlayer);
    } else if (pointsFirstPlayer >= 4 || pointsSecondPlayer >= 4) {
        return lateGameResult(pointsFirstPlayer, pointsSecondPlayer);
    } else {
        return earlyGameResult(pointsFirstPlayer, pointsSecondPlayer);
    }
    
    function evenResult(pointsFirstPlayer) {
        var evenScoresBeforeDeuce = ["Love-All", "Fifteen-All", "Thirty-All"];
            return evenScoresBeforeDeuce[pointsFirstPlayer] ?? "Deuce";
    }

    function earlyGameResult(pointsFirstPlayer, pointsSecondPlayer) {
        return `${scorePerPoints(pointsFirstPlayer)}-${scorePerPoints(pointsSecondPlayer)}`        

        function scorePerPoints(pointsFirstPlayer) {
            switch (pointsFirstPlayer) {
                case 0:
                    return "Love";
                case 1:
                    return "Fifteen";                    
                case 2:
                    return "Thirty";                    
                case 3:
                    return "Forty";
            }
        }
    }

    function lateGameResult(pointsFirstPlayer, pointsSecondPlayer) {
        var minusResult = pointsFirstPlayer - pointsSecondPlayer;
        if (minusResult === 1) { return "Advantage player1"; }
        else if (minusResult === -1) { return "Advantage player2"; }
        else if (minusResult >= 2) { return "Win for player1"; }
        else { return "Win for player2"; }
    }    
}

module.exports = getScore;
