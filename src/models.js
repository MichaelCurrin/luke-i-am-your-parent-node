/**
 * Models module.
 *
 * Define schema objects, the schema and the resolvers.
 * Note that numeric values are kept as strings because that is how the REST API returns them.
 */
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql');

const lib = require('./lib');


/**
 * Planet GraphQL object.
 *
 * Films and residents are returned from the API as lists of URLs and not actual detaileds objects.
 */
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


/**
 * GraphQL schema.
 *
 * Defines how the objects in the model are structured. Setting args for an object
 * means that the values can be passed in with a query e.g. to lookup a planet by
 * its ID.
 */
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


/**
 * GraphQL resolving functions.
 *
 * Defines how to handle a query for each object type. An ID is expected for the resource type
 * and that value is used to create and execute a query URL.
 */
const Resolvers = {
    planet: ({ id }) => {
        return lib.request('planets', id);
    }
};


module.exports = {
    Schema: Schema,
    Resolvers: Resolvers,
}
