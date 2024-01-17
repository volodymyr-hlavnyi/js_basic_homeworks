const citySelect = document.getElementById('citySelect');
const cityInput = document.getElementById('cityInput');

citySelect.addEventListener('change', function () {
    cityInput.value = citySelect.value;
    getWeather();
});

cityInput.addEventListener('input', function () {
    citySelect.selectedIndex = 0;
    getWeather();
});