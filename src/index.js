const axios = require('axios');
const baseUrl = 'https://swapi.co/api';

const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');


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
        return {
            climate: 'climate',
            name: 'name',
            terrain: 'terrain',
        };
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