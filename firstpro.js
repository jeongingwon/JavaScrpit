// OpenWeatherMap API 키
const apiKey = "be07a991413f586a7caaa594269efead"; // 여러분의 API 키로 교체하세요

// 사용자의 위치를 기반으로 날씨 정보를 가져오는 함수
function getWeatherInfo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // OpenWeatherMap API 호출 URL
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      // API 호출
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // 날씨 정보를 처리하여 웹페이지에 표시
          const weatherInfo = document.getElementById("weather-info");
          weatherInfo.innerHTML = `
                                <p>도시: ${data.name}</p>
                                <p>날씨: ${data.weather[0].description}</p>
                                <p>온도: ${data.main.temp} °C</p>
                                <p>습도: ${data.main.humidity} %</p>
                            `;
        })
        .catch((error) =>
          console.error("날씨 정보를 가져오는 중 오류 발생:", error)
        );
    });
  } else {
    console.error("Geolocation이 지원되지 않습니다.");
  }
}

// 페이지 로드 시 날씨 정보 가져오기
document.addEventListener("DOMContentLoaded", getWeatherInfo);
