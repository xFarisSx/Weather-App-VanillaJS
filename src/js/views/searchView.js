class searchView {
    _parentElement = document.querySelector(".search-btn");

    addHandlerSearch(handler) {
        console.log(this._parentElement);
        this._parentElement.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("wow");
            let query =
                this._parentElement.parentElement.querySelector("input").value;
            handler(query);
        });
    }
}

export default new searchView();
