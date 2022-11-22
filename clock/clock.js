window.onload = function () {
    const clock = document.getElementById("MyClockDisplay");
    setInterval(() => {
        let time = new Date();

        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        let dayTime = "PM";

        if (hours > 12) {
            if (hours >= 22) {
                hours = hours - 12;
            } else {
                hours = "0" + (hours - 12);
            }
        } else if (hours < 12) {
            dayTime = "AM";
            if (hours < 10) {
                hours = "0" + hours;
            }
        }

        minutes < 10 ? (minutes = "0" + minutes) : minutes;
        seconds < 10 ? (seconds = "0" + seconds) : seconds;

        clock.textContent = `${hours}:${minutes}:${seconds} ${dayTime}`;
    }, 1000);
};
