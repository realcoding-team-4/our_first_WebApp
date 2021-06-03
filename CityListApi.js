class CityListApi {
    fetchAvailableCities = () => fetch('https://raw.githubusercontent.com/example0312/weather-crawler/e3168f2b4e316691f8ab385f738783976eef7f0d/availableCityNames')
        .then(response => response.json());
}

export default new CityListApi();