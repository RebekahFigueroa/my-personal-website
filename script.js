document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const timer = document.getElementById("timer");
    timer.textContent = `The local time is: ${new Date().toLocaleTimeString()}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
