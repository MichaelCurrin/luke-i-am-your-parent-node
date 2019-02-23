const axios = require('axios');
const BASE_URL = "https://swapi.co/api";

const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');


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

    return axios.get(url)
        .then(resp => resp.data);
}


const Planet = new GraphQLObjectType({
    name: 'PlanetType',
    fields: {
        climate: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        terrain: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});


const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "QueryType",
        fields: {
            planet: {
                type: Planet,
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
        }
    }
`;


graphql(Schema, Query, Resolvers)
    .then(res => console.log(res));