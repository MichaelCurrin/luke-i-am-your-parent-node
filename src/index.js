/**
 * Main application script.
 *
 * Use the GraphQL schema to fetch data from SWAPI for a specified
 * planet and log the results.
 */
const { graphql } = require('graphql');

const models = require('./models');

// Sample query for testing, with a variables passed in on params to select a planet by ID.
var query = `
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
var params = { id: 1 };
// Do the query against the schema and resolvers then log the result,
// which looks best formatted as indented JSON (rather than a JS object).
graphql(models.Schema, query, models.Resolvers, null, params).then(res =>
  console.log(JSON.stringify(res, null, 4))
);

query = `
    query FetchFilm($id: Int!) {
        film (id: $id) {
            title
            species
            created
            opening_crawl
            planets {
                name
                terrain
            }
        }
    }
`;
params = { id: 1 };
graphql(models.Schema, query, models.Resolvers, null, params).then(res =>
  console.log(JSON.stringify(res, null, 4))
);

query = `
    query {
        allFilms {
            title
            producer
            release_date
        }
        allPlanets {
            name
            climate
        }
    }
`;
graphql(models.Schema, query, models.Resolvers, null, params).then(res =>
  console.log(JSON.stringify(res, null, 4))
);

query = `
    query FetchSpecies {
        human: species (id: 1) {
            name
            classification
            designation
        }
        droid: species (id: 2) {
            name
            classification
            designation
        }

        allStarships  {
            name
            model
        }

        vehicle (id: 4) {
            name
            model
        }
    }
`;
graphql(models.Schema, query, models.Resolvers, null, null).then(res =>
  console.log(JSON.stringify(res, null, 4))
);
