/**
 * Basic demo of hardcoded fetching and printing of data.
 */
const axios = require('axios');

const url = 'https://swapi.co/api/planets/1/';
axios.get(url)
    .then(resp => resp.data)
    .then(data => console.log(data));
