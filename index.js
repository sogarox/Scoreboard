let homeIncrement = 0
let awayIncrement = 0
let homeScore = 0
let awayScore = 0

let home = document.getElementById("js-home")
let away = document.getElementById("js-away")

home.innerText = homeScore
away.innerText = awayScore

function countersum(homeIncrement, awayIncrement){
    if (homeIncrement) {
        homeScore += homeIncrement;
        home.innerText = homeScore
    }else if (awayIncrement){
        awayScore += awayIncrement;
        away.innerText = awayScore
    }
}
