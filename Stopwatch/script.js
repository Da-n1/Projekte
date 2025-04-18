document.getElementById("clockTab").addEventListener("click", () => {
    document.getElementById("clockView").style.display = "block";
    document.getElementById("stopwatchView").style.display = "none";
    document.getElementById("clockTab").classList.add("active");
    document.getElementById("stopwatchTab").classList.remove("active");
});

document.getElementById("stopwatchTab").addEventListener("click", () => {
    document.getElementById("clockView").style.display = "none";
    document.getElementById("stopwatchView").style.display = "block";
    document.getElementById("stopwatchTab").classList.add("active");
    document.getElementById("clockTab").classList.remove("active");
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

const timerDisplay = document.getElementById("stopwatchDisplay");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startTimer(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stopTimer(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() -startTime;
        isRunning = false;
    }
}

function resetTimer(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    timerDisplay.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000*60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000/10);
    
    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);
    
    timerDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}