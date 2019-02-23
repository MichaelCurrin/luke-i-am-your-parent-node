/**
 * Main script.
 */


const { graphql } = require('graphql');

const models = require('./models');

const query = `
    query {
        planet (id: 1) {
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


graphql(models.Schema, query, models.Resolvers)
    .then(res => console.log(JSON.stringify(res, null, 4)));