import Constants from 'expo-constants';

const {
    apiKey,
    baseUrl,
    region,
} = Constants.manifest.extra.openWeatherApi;

class OpenWeatherApi {
    fetchWeatherInfoByCityName = cityName => {
        const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        return fetch(url)
            .then(response => response.json());
    }
}

export default new OpenWeatherApi();