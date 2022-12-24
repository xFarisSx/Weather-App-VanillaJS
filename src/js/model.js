import { async } from "regenerator-runtime";
import { API_URL, CITY_API_KEY, CITY_API_URL } from "./config.js";
import { timeout } from "./helpers";

export const state = {
    weather: {},
};

function createWeatherObj(data) {
    const weather = {
        city: data.name,
        temp: data.main.temp - 273,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        clouds: data.clouds.all,
        description: data.weather[0].description,
        main: data.weather[0].main,
    };
    return weather;
}

export const loadWeather = async function (city = undefined) {
    try {
        if (city) {
            const cityRes = await fetch(CITY_API_URL + `&query=${city}`);

            if (!cityRes.ok) throw new Error("Cannot find the positions!");

            const dataCity = await cityRes.json();

            console.log(dataCity);

            const lat = dataCity.data[0].latitude;
            const lon = dataCity.data[0].longitude;
            console.log(city);

            const res = await fetch(
                API_URL.replace("{lat}", lat).replace("{lon}", lon)
            );
            const data = await res.json();

            state.weather = createWeatherObj(data);
            return state.weather;
        } else {
            await new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition(
                    async function (pos) {
                        const { latitude: lat, longitude: lon } = pos.coords;

                        const res = await fetch(
                            API_URL.replace("{lat}", lat).replace("{lon}", lon)
                        );
                        const data = await res.json();

                        state.weather = createWeatherObj(data);
                        resolve();
                        return state.weather;
                    },
                    (err) => {
                        throw new Error(err);
                    }
                );
            });
        }
    } catch (err) {
        throw err.message;
    }
};
