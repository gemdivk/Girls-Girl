const apiKey = 'f07b61fa569bf932fad4fcf42eb4e57f';
const city = 'Astana'; 
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

function fetchWeather() {
  fetch(weatherUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp; 
      const description = data.weather[0].description; 
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`; 
      let fashionAdvice;

      if (temperature < 0) {
        fashionAdvice = "It's cold, dress warmly but stay stylish! 🧥";
      } else if (temperature >= 0 && temperature <= 10) {
        fashionAdvice = "It's cool outside, you can wear cozy sweaters and boots! 🧣👢";
      } else if (temperature > 10 && temperature <= 20) {
        fashionAdvice = "Mild weather, a light jacket and jeans would be perfect! 🧥👖";
      } else {
        fashionAdvice = "Warm weather, feel free to wear something light and comfortable! ☀️👗";
      }

      document.querySelector('#fashion-weather').innerHTML = `
        <img src="${icon}" alt="Weather icon">
        <p>${temperature}°C, ${description}</p>
        <p>${fashionAdvice}</p>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
      document.querySelector('#fashion-weather').innerHTML = `
        <p>Unable to load weather data. Please try again later.</p>
      `;
    });
}

fetchWeather();
