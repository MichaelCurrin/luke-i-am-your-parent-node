/**
 * Main application script.
 *
 * Use the GraphQL schema to fetch data from SWAPI for a specified
 * planet and log the results.
 */
const { graphql } = require('graphql');

const models = require('./models');


const query = `
    query FetchPlanet($id: Int!) {
        planet (id: $id) {
            climate
            name
            terrain
            gravity
            orbital_period
            films
            residents
        }
    }
`;
const params = { id: 1 };


graphql(models.Schema, query, models.Resolvers, null, params)
    .then(res => console.log(JSON.stringify(res, null, 4)));
