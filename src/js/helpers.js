import { async } from "regenerator-runtime";

export const timeout = function (s) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Done");
        }, s * 1000);
    });
};
