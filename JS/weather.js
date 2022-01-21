const API_KEY = '2fade777d1cede4d9362deee9b4bd1ba';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const temp = document.querySelector('#weather span:nth-child(2)');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = `  ${data.name}`;
      const condition = data.weather[0].main;
      if (condition === 'Clouds') {
        weather.classList.add('fas', 'fa-cloud');
      } else if (condition === 'Clear') {
        weather.classList.add('fas', 'fa-sun');
      } else if (condition === 'Thunderstorm') {
        weather.classList.add('fas', 'fa-bolt');
      } else if (condition === 'Drizzle') {
        weather.classList.add('fas', 'fa-cloud-rain');
      } else if (condition === 'Rain') {
        weather.classList.add('fas', 'fa-cloud-showers-heavy');
      } else if (condition === 'Snow') {
        weather.classList.add('fas', 'fa-snowflake');
      } else if (condition === 'Atmosphere') {
        weather.classList.add('fas', 'fa-smog');
      } else {
        weather.classList.add('fas', 'fa-cloud');
      }
      temp.innerText = `  / ${Math.round(data.main.temp)}°  `;
    });
}

function onGeoError() {
  const temp = document.querySelector('#weather span:nth-child(2)');
  temp.innerText = `Can't you find you.  No weather for you.`;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
