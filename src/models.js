/**
 * Models.
 *
 * Note that numeric values are kept as strings because that is how the REST API returns them.
 */

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


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


module.exports = {
    Planet: Planet
}