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
        const resultBasedOnPointsDifference = {}
        resultBasedOnPointsDifference["-4"] = "Win for player2",
        resultBasedOnPointsDifference["-3"] = "Win for player2",
        resultBasedOnPointsDifference["-2"] = "Win for player2",
        resultBasedOnPointsDifference["-1"] = "Advantage player2",
        resultBasedOnPointsDifference["1"] = "Advantage player1",
        resultBasedOnPointsDifference["2"] = "Win for player1",
        resultBasedOnPointsDifference["3"] = "Win for player1",
        resultBasedOnPointsDifference["4"] = "Win for player1"

        return resultBasedOnPointsDifference[pointsFirstPlayer - pointsSecondPlayer];
    }    
}

module.exports = getScore;
