document.getElementById('getWeather').addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '74a013ad72b9d001518b8240f49fcdf9'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = `
        <div class="weather-info">
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity} %</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
}
