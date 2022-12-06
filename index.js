let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let contentDisplay = document.getElementById("content")
let homeScoreCount = 0
let guestScoreCount = 0

function homeIncrement1 (){
    homeScoreCount += 1
    scoreHome.textContent = homeScoreCount
}

function homeIncrement2 (){
    homeScoreCount += 2
    scoreHome.textContent = homeScoreCount
}

function homeIncrement3 (){
    homeScoreCount += 3
    scoreHome.textContent = homeScoreCount
}

function guestIncrement1 (){
    guestScoreCount += 1
    scoreGuest.textContent = guestScoreCount
}

function guestIncrement2 (){
    guestScoreCount += 2
    scoreGuest.textContent = guestScoreCount
}

function guestIncrement3 (){
    guestScoreCount += 3
    scoreGuest.textContent = guestScoreCount
}

function clearAll() {
    guestScoreCount = 0
    scoreGuest.textContent = guestScoreCount
    homeScoreCount = 0
    scoreHome.textContent = homeScoreCount

}

function finish() {
    if (homeScoreCount > guestScoreCount) {
        alert("The Home Team Wins")
    }
    else if (guestScoreCount > homeScoreCount) {
        alert("The Guest Team Wins")
    }
    else{
        alert("It's a Tie")
    }
    clearAll()
}