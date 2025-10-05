let hours = 0,
  minutes = 0,
  seconds = 0;
let interval;
let running = false;

function updateTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("time").textContent = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startStopwatch() {
  if (!running) {
    interval = setInterval(updateTime, 1000);
    running = true;
  }
}

function pauseStopwatch() {
  clearInterval(interval);
  running = false;
}

function resetStopwatch() {
  pauseStopwatch();
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("time").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (running) {
    const lapTime = document.getElementById("time").textContent;
    const lapDiv = document.createElement("div");
    lapDiv.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").prepend(lapDiv);
  }
}
