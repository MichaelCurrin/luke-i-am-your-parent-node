/**
 * Basic demo of fetching and printing of SWAP data using a fixed URL.
 */
const axios = require('axios');

const url = 'https://swapi.dev/api/planets/1/';
axios.get(url).then(resp => resp.data).then(data => console.log(data));
