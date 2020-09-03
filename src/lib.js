/**
 * Library module.
 */
const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api';

/**
 * Request a Star Wars object or objects from the API and return the response JSON data.
 *
 * @param string type Name of object type to lookup. Must be one of the values
 *      defined here: https://swapi.dev/documentation#root .
 * @param numeric id The ID of the object to look up within the type.
 *
 * @return Promise A resolved promise containing the data if the request was successful.
 *     There is other metadata on the response but we just use the data attribute.
 */
function requestAPI(type, id = null) {
  let url = `${BASE_URL}/${type}/`;
  if (id) {
    url = `${url}${id}/`;
  }
  console.log(`Requesting: ${url}`);

  return axios.get(url).then(resp => resp.data);
}

module.exports = {
  requestAPI: requestAPI
};
