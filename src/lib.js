/**
 * Lib module
 */
const axios = require('axios');

const BASE_URL = "https://swapi.co/api";


/**
 * Request a Star Wars object from the API and return it.
 *
 * @param string type Name of object type to lookup. Must be one of the values
 *      defined here: https://swapi.co/documentation#root .
 * @param numeric id The ID of the object to look up within the type.
 *
 * @return Promise A resolved promise containing the data if the request was successful.
 */
function request(type, id) {
    let url = `${BASE_URL}/${type}/${id}/`;
    console.log(`Requesting: ${url}`);

    return axios.get(url)
        .then(resp => resp.data);
}


module.exports = {
    request: request,
}
