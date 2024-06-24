document.getElementById('searchBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    fetchWeather(location);
});

function fetchWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                `;
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
