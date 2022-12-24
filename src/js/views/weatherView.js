class WeatherView {
    _parentElement = document.querySelector(".main");
    _data;

    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }

    _generateHTML(data = this._data) {
        return `
			<div class="info">
			<div class="temperature">
				<h1>${data.temp.toFixed(1)}°</h1>
			</div>
			<div class="country"><h1>${data.city}</h1></div>
			<div class="status">
				<div class="sign"><i class="fa-solid fa-cloud-sun"></i></div>
				<div class="text">${data.description}</div>
			</div>
		</div>
		<div class="side">
			<div class="search">
				<input type="text" class="search-input" placeholder="Location">
				<button class="search-btn"><i style="margin: 0;" class="fa-solid fa-magnifying-glass"></i></button>
			</div>
			<div class="weather-details">
				<h1>Weather Details</h1>
				<div class="details">
					<div class="cloudy-container detail-container">
						Cloudy <span  class="detail">${data.clouds}%</span>
					</div>
					<div class="humidity-container detail-container">
						Humidity <span class="detail">${data.humidity}%</span>
					</div>
					<div class="wind-container detail-container">
						Wind <span class="detail">${data.wind}km/h</span>
					</div>
				</div>
			</div>
		</div>
		`;
    }

    render(data) {
        this._data = data;
        this.markup = this._generateHTML(data);

        const newDOM = document
            .createRange()
            .createContextualFragment(this.markup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(
            this._parentElement.querySelectorAll("*")
        );

        curElements.forEach((el, i) => {
            if (el.childElementCount === 0) {
                el.textContent = newElements[i].textContent;
            }
        });
        console.log(this._data.main);
        const day = new Date().getHours() > 6 && new Date().getHours() < 20;
        switch (this._data.description) {
            case "clear sky":
                switch (day) {
                    case true:
                        this._parentElement.style.backgroundImage = `url('https://media.istockphoto.com/id/517897328/photo/beautiful-sky-with-white-cloud-background.jpg?b=1&s=170667a&w=0&k=20&c=kDH_rxWr5uk7UlFIqTYnSTFZfKQC5wIhiIlZuNWd66E=')`;
                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/01d@2x.png";
                        break;
                    case false:
                        this._parentElement.style.backgroundImage =
                            'url("https://i.pinimg.com/originals/fd/82/2a/fd822a175c882a4856fa9a95a450d829.jpg")';

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/01n@2x.png";
                        break;
                }

                break;
            case "few clouds":
                this._parentElement.style.backgroundImage = `url('https://media.istockphoto.com/id/517897328/photo/beautiful-sky-with-white-cloud-background.jpg?b=1&s=170667a&w=0&k=20&c=kDH_rxWr5uk7UlFIqTYnSTFZfKQC5wIhiIlZuNWd66E=')`;

                switch (day) {
                    case true:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/02d@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                    case false:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/02n@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                }
                break;
            case "scattered clouds":
                this._parentElement.style.backgroundImage = `url('https://live.staticflickr.com/2106/1909487867_de140c7eb8_b.jpg')`;

                switch (day) {
                    case true:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/03d@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                    case false:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/03n@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                }
                break;

            case "broken clouds":
                this._parentElement.style.backgroundImage = `url('https://i.pinimg.com/originals/e9/48/9c/e9489cabae5ef3546f3e3f80e79f72f2.jpg')`;

                switch (day) {
                    case true:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/04d@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                    case false:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/04n@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                }
                break;
            case "shower rain":
                this._parentElement.style.backgroundImage = `url('https://cdn.pixabay.com/photo/2014/09/21/14/39/surface-455124__340.jpg')`;

                switch (day) {
                    case true:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/09d@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                    case false:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/09n@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                }
                break;
            case "rain":
                this._parentElement.style.backgroundImage = `url('https://cdn.pixabay.com/photo/2014/09/21/14/39/surface-455124__340.jpg')`;

                switch (day) {
                    case true:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/10d@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                    case false:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/10n@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                }
                break;
            case "thunderstorm":
                this._parentElement.style.backgroundImage = `url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')`;

                switch (day) {
                    case true:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/11d@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                    case false:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/11n@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                }
                break;
            case "snow":
                this._parentElement.style.backgroundImage = `url('https://hips.hearstapps.com/clv.h-cdn.co/assets/16/49/gettyimages-85786660-1.jpg')`;

                this._parentElement.querySelector(".info").style.color = "#222";

                switch (day) {
                    case true:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/13d@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                    case false:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/13n@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                }
                break;
            case "mist":
                this._parentElement.style.backgroundImage = `url('https://images.unsplash.com/photo-1603794052293-650dbdeef72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzdHxlbnwwfHwwfHw%3D&w=1000&q=80')`;

                switch (day) {
                    case true:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/50d@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                    case false:
                        document.querySelector(".sign img").src =
                            "http://openweathermap.org/img/wn/50n@2x.png";

                        document.body.style.backgroundImage =
                            this._parentElement.style.backgroundImage;
                        break;
                }
                break;
        }
    }
}

export default new WeatherView();
