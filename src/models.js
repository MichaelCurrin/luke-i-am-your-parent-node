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
  GraphQLList
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
    }
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

    characters: {
      type: new GraphQLList(GraphQLString)
    },
    planets: {
      type: new GraphQLList(Planet)
      // type: new GraphQLList(GraphQLString)
    },
    starships: {
      type: new GraphQLList(GraphQLString)
    },
    vehicles: {
      type: new GraphQLList(GraphQLString)
    },
    species: {
      type: new GraphQLList(GraphQLString)
    }
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
    }
  }
});

const Species = new GraphQLObjectType({
  name: 'SpeciesType',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    classification: {
      type: new GraphQLNonNull(GraphQLString)
    },
    designation: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

const Spaceship = new GraphQLObjectType({
  name: 'SpaceshipType',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    model: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

const Vehicle = new GraphQLObjectType({
  name: 'VehicleType',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    model: {
      type: new GraphQLNonNull(GraphQLString)
    }
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
    name: 'QueryType',
    fields: {
      planet: {
        type: Planet,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        }
      },
      film: {
        type: Film,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        }
      },
      person: {
        type: Person,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        }
      },
      species: {
        type: Species,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        }
      },
      spaceship: {
        type: Spaceship,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        }
      },
      vehicle: {
        type: Vehicle,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        }
      },
      allPlanets: {
        type: new GraphQLList(Planet)
      },
      allFilms: {
        type: new GraphQLList(Film)
      },
      allPeople: {
        type: new GraphQLList(Person)
      },
      allSpecies: {
        type: new GraphQLList(Species)
      },
      allStarships: {
        type: new GraphQLList(Spaceship)
      },
      allVehicles: {
        type: new GraphQLList(Vehicle)
      }
    }
  })
});

/**
 * GraphQL resolving functions.
 *
 * Defines how to handle a query for each object type.
 *
 * An ID is expected for the resource type and
 * that value is used to create and execute a query URL.
 *
 * The Star Wars API returns all fields, so don't specify what fields we want, just the object ID.
 *
 * Note that Film is setup to handles nested queries here. Rather than just
 * returning Planets as an array of strings, the actual Planet objects are fetched and then the result returned.
 */
const Resolvers = {
  planet: ({ id }) => lib.requestAPI('planets', id),
  allPlanets: () => lib.requestAPI('planets').then(data => data.results),

  film: ({ id }) =>
    lib.requestAPI('films', id).then(function(data) {
      // Use .all to resolve all promises in the array before returning.
      data.planets = Promise.all(
        data.planets
          .map(function(planetUrl) {
            // Extract number from '.../planets/N/' URL. The match structure
            // means we need the first item.
            return planetUrl.match(/\d/)[0];
          })
          .map(function(planetId) {
            return lib.requestAPI('planets', planetId);
          })
      );

      return data;
    }),
  allFilms: () => lib.requestAPI('films'),

  person: ({ id }) => lib.requestAPI('people', id),
  allPeople: () => lib.requestAPI('people').then(data => data.results),

  species: ({ id }) => lib.requestAPI('species', id),
  allSpecies: () => lib.requestAPI('species').then(data => data.results),

  starship: ({ id }) => lib.requestAPI('starships', id),
  allStarships: () => lib.requestAPI('starships').then(data => data.results),

  vehicle: ({ id }) => lib.requestAPI('vehicles', id),
  allVehicles: () => lib.requestAPI('vehicles').then(data => data.results)
};

module.exports = {
  Schema: Schema,
  Resolvers: Resolvers
};
