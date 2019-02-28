/**
 * Models module.
 *
 * Define schema objects, the schema and the resolvers.
 * Note that numeric values are kept as strings because that is how the REST API returns them.
 *
 * The SWAPI schema indicates if a value is required and that is then applied as non-null constraint
 * here.
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
 * Films and residents are returned from the API as lists of URLs and not actual detailed objects.
 */
const Planet = new GraphQLObjectType({
    name: 'PlanetType',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        url: {
            type: new GraphQLNonNull(GraphQLString)
        },

        climate: {
            type: new GraphQLNonNull(GraphQLString)
        },
        diameter: {
            type: new GraphQLNonNull(GraphQLString)
        },
        edited: {
            type: new GraphQLNonNull(GraphQLString)
        },
        gravity: {
            type: new GraphQLNonNull(GraphQLString)
        },
        orbital_period: {
            type: new GraphQLNonNull(GraphQLString)
        },
        population: {
            type: new GraphQLNonNull(GraphQLString)
        },
        rotation_period: {
            type: new GraphQLNonNull(GraphQLString)
        },
        surface_water: {
            type: new GraphQLNonNull(GraphQLString)
        },
        terrain: {
            type: new GraphQLNonNull(GraphQLString)
        },

        created: {
            type: new GraphQLNonNull(GraphQLString)
        },
        edited: {
            type: new GraphQLNonNull(GraphQLString)
        },

        films: {
            type: new GraphQLList(GraphQLString)
        },
        residents: {
            type: new GraphQLList(GraphQLString)
        },
    }
});


/**
 * Film GraphQL object.
 */
const Film = new GraphQLObjectType({
    name: 'FilmType',
    fields: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        url: {
            type: new GraphQLNonNull(GraphQLString)
        },

        episode_id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        opening_crawl: {
            type: new GraphQLNonNull(GraphQLString)
        },
        director: {
            type: new GraphQLNonNull(GraphQLString)
        },
        producer: {
            type: new GraphQLNonNull(GraphQLString)
        },
        release_date: {
            type: new GraphQLNonNull(GraphQLString)
        },
        created: {
            type: new GraphQLNonNull(GraphQLString)
        },
        edited: {
            type: new GraphQLNonNull(GraphQLString)
        },

        created: {
            type: new GraphQLNonNull(GraphQLString)
        },
        edited: {
            type: new GraphQLNonNull(GraphQLString)
        },

        characters: {
            type: new GraphQLList(GraphQLString)
        },
        planets: {
            type: new GraphQLList(GraphQLString)
        },
        starships: {
            type: new GraphQLList(GraphQLString)
        },
        vehicles: {
            type: new GraphQLList(GraphQLString)
        },
        species: {
            type: new GraphQLList(GraphQLString)
        },
    }
});


/**
 * Person GraphQL object.
 */
const Person = new GraphQLObjectType({
    name: 'PersonType',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        url: {
            type: new GraphQLNonNull(GraphQLString)
        },

        skin_color: {
            type: new GraphQLNonNull(GraphQLString)
        },
        hair_color: {
            type: new GraphQLNonNull(GraphQLString)
        },
        eye_color: {
            type: new GraphQLNonNull(GraphQLString)
        },
        birth_year: {
            type: new GraphQLNonNull(GraphQLString)
        },
        gender: {
            type: new GraphQLNonNull(GraphQLString)
        },
        height: {
            type: new GraphQLNonNull(GraphQLString)
        },
        mass: {
            type: new GraphQLNonNull(GraphQLString)
        },

        created: {
            type: new GraphQLNonNull(GraphQLString)
        },
        edited: {
            type: new GraphQLNonNull(GraphQLString)
        },

        homeworld: {
            type: new GraphQLNonNull(GraphQLString)
        },

        films: {
            type: new GraphQLList(GraphQLString)
        },
        species: {
            type: new GraphQLList(GraphQLString)
        },
        starships: {
            type: new GraphQLList(GraphQLString)
        },
        vehicles: {
            type: new GraphQLList(GraphQLString)
        },
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
            },
            film: {
                type: Film,
                args: {
                    id: { type: new GraphQLNonNull(GraphQLInt) }
                },
            },
            allPlanets: {
                type:  new GraphQLList(Planet),
            },
            allFilms: {
                type:  new GraphQLList(Film),
            },
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
    planet: ({ id }) => lib.requestAPI('planets', id),
    allPlanets: () => lib.requestAPI('planets').then(data => data.results),
    film: ({ id }) => lib.requestAPI('films', id),
    allFilms: () => lib.requestAPI('films').then(data => data.results),
};


module.exports = {
    Schema: Schema,
    Resolvers: Resolvers,
}
