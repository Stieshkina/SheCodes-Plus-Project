let now = new Date();

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentDay = document.querySelector(".dayNow");
currentDay.innerHTML = `${day},`;

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let currentMonth = document.querySelector(".monthNow");
currentMonth.innerHTML = `${month}`;

let currentDate = document.querySelector(".dateNow");
currentDate.innerHTML = ` ${date}`;

let currentHour = document.querySelector(".hourNow");
currentHour.innerHTML = `${hour}`;

let currentMinutes = document.querySelector(".minuteNow");
currentMinutes.innerHTML = `${minutes}`;

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let result = document.querySelector(".degree");
  result.innerHTML = temperature;
  document.querySelector("h1").innerHTML = response.data.name;
}
function showLocation(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let units = "metric";
  let apiKey = "be0b3655b1c5472db71e4600b1746970";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);
}

function showPlace(city) {
  let units = "metric";
  let apiKey = "be0b3655b1c5472db71e4600b1746970";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(url).then(showTemperature);
}
function saveLocation(event) {
  event.preventDefault();
  let city = document.querySelector(".form-control").value;
  showPlace(city);
}

let form = document.querySelector(".search");
form.addEventListener("submit", saveLocation);

let currentCityButton = document.querySelector(".current-city");
currentCityButton.addEventListener("click", getCurrentLocation);
