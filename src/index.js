/**
 * Main application script.
 *
 * Use the GraphQL schema to fetch data from SWAPI for a specified
 * planet and log the results.
 */
const { graphql } = require('graphql');

const models = require('./models');


// Sample query for testing, with a variables passed in on params to select a planet by ID.
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


// Do the query against the schema and resolvers then log the result,
// which looks best formatted as indented JSON (rather than a JS object).
graphql(models.Schema, query, models.Resolvers, null, params)
    .then(res => console.log(JSON.stringify(res, null, 4)));
