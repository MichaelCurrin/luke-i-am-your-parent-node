/**
 * Main script.
 */
const axios = require('axios');

const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');


const models = require('./models');
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


const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "QueryType",
        fields: {
            planet: {
                type: models.Planet,
                args: {
                    id: { type: new GraphQLNonNull(GraphQLInt) }
                },
            }
        }
    })
});


const Resolvers = {
    planet: ({ id }) => {
        return request('planets', id);
    }
};


const Query = `
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


graphql(Schema, Query, Resolvers)
    .then(res => console.log(JSON.stringify(res, null, 4)));