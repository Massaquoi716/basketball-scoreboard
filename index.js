let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("awayScore")
let count = 0;

function increment1homeScore() {
    count++
    homeScore.textContent = count;
}



function increment2homeScore() {
    count += 2;
    homeScore.textContent = count;
}


function increment3homeScore() {
    count += 3;
    homeScore.textContent = count;
}

function remove1homeScore() {
    count -= 1
    
     homeScore.textContent = count;
    
}


function increment1awayScore() {
    count++
     awayScore.textContent = count;
}



function increment2awayScore() {
    count += 2;
     awayScore.textContent = count;
}


function increment3awayScore() {
    count += 3;
     awayScore.textContent = count;
}

function remove1awayScore() {
    count -= 1
    
      awayScore.textContent = count;
    
}

function resetbtn() {
    awayScore.textContent = 0
    homeScore.textContent = 0
}










