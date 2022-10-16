
// HOME SCORE
let scoreHomeEl = document.getElementById("score-home")
let scoreHome = 0

function onepointhome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function twopointhome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function threepointhome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

// GUEST SCORE 
let scoreGuestEl = document.getElementById("score-guest")
let scoreGuest = 0

function onepointguest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function twopointguest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function threepointguest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

// RESET BUTTON
function reset() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = scoreHome
    scoreGuestEl.textContent = scoreGuest
    
}