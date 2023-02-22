// home and guest score
let home = document.getElementById('count_home')
let guest = document.getElementById('count_guest')

// home and guest headers
let hHome = document.getElementById('home')
let hGuest = document.getElementById('guest')

// play and pause button
let playBtn = document.getElementById('play_pause')
playBtn.textContent = 'GO'

// home and guest count
let countHome = 0;
let countGuest = 0;

home.textContent = countHome
guest.textContent = countGuest

// <---------------------------------------------------->

// buttons +1 +2 +3
const countButtons = Array.from(document.querySelectorAll('.btn_disabled'))

// buttons disabled when game is startet
function btnDisabled(state) { 
    
    countButtons.forEach(b => state ? b.setAttribute('disabled', state) : b.removeAttribute('disabled'))     
} 

// <---------------------------------------------------->
// highlight the leader function

function leaderRed() {
    if (countHome > countGuest) {
        hHome.style.color = '#F94F6D'
        hGuest.style.color = '#EEEEEE'
    } else {
       hGuest.style.color = '#F94F6D'
       hHome.style.color = '#EEEEEE'
    }
}

// <---------------------------------------------------->
// +1 +2 +3 home functions
function handleOnClickPlus1Home() {
    countHome++;
    home.textContent = countHome
    leaderRed()
    
} 

function handleOnClickPlus2Home() {
    countHome += 2;
    home.textContent = countHome
    leaderRed()
} 

function handleOnClickPlus3Home() {
    countHome += 3;
    home.textContent = countHome
    leaderRed()
}

// <----------------------------------------------------->
// +1 +2 +3 guests functions

function handleOnClickPlus1Guest() {
    countGuest++;
    guest.textContent = countGuest
    leaderRed()
} 

function handleOnClickPlus2Guest() {
    countGuest += 2;
    guest.textContent = countGuest
    leaderRed()
} 

function handleOnClickPlus3Guest() {
    countGuest+= 3;
    guest.textContent = countGuest
    leaderRed()
} 

// <----------------------------------------------------->
// new game function: reset all

let stopTimer = false

function resetGame() {
    countHome = 0;    
    countGuest = 0;    
    
    home.textContent = countHome
    guest.textContent = countGuest
    
    hGuest.style.color = '#EEEEEE'
    hHome.style.color = '#EEEEEE'
    
    playBtn.textContent = 'GO'    
    document.getElementById('count_time').innerText = 12
    stopTimer = true
    btnDisabled(true);
    
}

// <----------------------------------------------------->
// timer function

function handlePlayOrPause() {  
        
    if (playBtn.textContent === 'GO') {
        stopTimer = false
        btnDisabled(false)    
        playBtn.textContent = ' '
           
        
        // const countDownTime = Date.now() + (12 * 60 * 60 * 1000);           
        const countDownTime = Date.now() + (12 * 60 * 1000);           
    
        const timeToCount = setInterval(() => {
            if (stopTimer) {
                clearInterval(timeToCount)
                return
            }
            const now = Date.now()
            const distance = countDownTime - now;
            
            const minutes = Math.floor((distance / 1000 / 60));
            const seconds = Math.floor(distance / 1000) - (minutes * 60) ;                           
            
            document.getElementById("count_time").textContent = minutes + ':' + seconds;        
            
            if (distance < 0) {
                btnDisabled(true)
                clearInterval(timeToCount);
                stopTimer = true
                document.getElementById("count_time").innerHTML = 0;
                playBtn.textContent = 'GO'
            }            
        }, 1000);            
    } else {         
         document.getElementById('count_time').innerText = 12
         btnDisabled(true)        
    }
    
      
}

