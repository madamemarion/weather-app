function formatDate(date) {
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let hours = date.getHours().toString().padStart(2, "0");
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = days[date.getDay()];

    return `${dayOfWeek} ${hours}:${minutes}`;
}

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);

