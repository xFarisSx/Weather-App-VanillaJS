import * as model from "./model.js";
import weatherView from "./views/weatherView.js";
import searchView from "./views/searchView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

if (module.hot) {
    module.hot.accept();
}

////////////////////////////

const controlWeather = async function () {
    try {
        await model.loadWeather();

        const weatherData = model.state.weather;
        weatherView.render(weatherData);
    } catch (err) {
        console.error(err);
    }
};

const controlSearch = async function (query) {
    try {
        await model.loadWeather(query);

        const weatherData = model.state.weather;
        weatherView.render(weatherData);
    } catch (err) {
        console.error(err);
    }
};

const init = async function () {
    weatherView.addHandlerRender(controlWeather);
    searchView.addHandlerSearch(controlSearch);
};

window.addEventListener("DOMContentLoaded", init);
