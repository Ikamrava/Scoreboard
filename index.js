let countHome = 0;
let countGuest = 0;
homeScore = document.getElementById("p-hscore");
guestScore = document.getElementById("p-gscore");

function h_plusThree() {
  countHome += 3;
  homeScore.textContent = countHome;
}
function h_plusTwo() {
  countHome += 2;
  homeScore.textContent = countHome;
}
function h_plusOne() {
  countHome += 1;
  homeScore.textContent = countHome;
}

function g_plusOne() {
  countGuest += 1;
  guestScore.textContent = countGuest;
}

function g_plusTwo() {
  countGuest += 2;
  guestScore.textContent = countGuest;
}

function g_plusThree() {
  countGuest += 3;
  guestScore.textContent = countGuest;
}
