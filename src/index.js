const axios = require('axios');
const BASE_URL = "https://swapi.co/api";

const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');


/**
 * Request a Star Wars object from the API and return it.
 *
 * @param string type Name of object type to lookup. Must be one of the values
 *      defined here: https://swapi.co/documentation#root .
 * @param numeric id The ID of the object to look up within the type.
 */
function request(type, id) {
    let url = `${BASE_URL}/${type}/${id}/`;
    console.log(url)
    return axios.get(url)
        .then(resp => resp.data);
}


const Planet = new GraphQLObjectType({
    name: 'PlanetType',
    fields: {
        climate: {
            type: GraphQLNonNull(GraphQLString)
        },
        name: {
            type: GraphQLNonNull(GraphQLString)
        },
        terrain: {
            type: GraphQLNonNull(GraphQLString)
        }
    }
});


const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "QueryType",
        fields: {
            planet: {
                type: Planet
            }
        }
    })
});


const Resolvers = {
    planet() {
        return request('planets', 1);
    }
};


const Query = `
    query {
        planet {
            climate
            name
            terrain
        }
    }
`;


graphql(Schema, Query, Resolvers)
    .then(res => console.log(res));