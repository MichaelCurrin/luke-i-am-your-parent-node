const axios = require('axios');
const BASE_URL = "https://swapi.co/api";

const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


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


// Note that numeric values are kept as strings because that is how the REST API returns them.
// Films and residents are returned from the API as lists of URLs and not actual objects.
const Planet = new GraphQLObjectType({
    name: 'PlanetType',
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        climate: { type: GraphQLString },
        diameter: { type: GraphQLString },
        edited: { type: GraphQLString },
        films: { type: new GraphQLList(GraphQLString) },
        gravity: { type: GraphQLString },
        orbital_period: { type: GraphQLString },
        population: { type: GraphQLString },
        residents: { type: new GraphQLList(GraphQLString) },
        rotation_period: { type: GraphQLString },
        terrain: { type: GraphQLString },
        surface_water: { type: GraphQLString },
        url: { type: GraphQLString },
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
            gravity
            orbital_period
            films
            residents
        }
    }
`;


graphql(Schema, Query, Resolvers)
    .then(res => console.log(JSON.stringify(res, null, 4)));