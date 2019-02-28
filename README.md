# Luke, I Am Your Parent Node
> GraphQL wrapper for Star Wars API, written in NodeJS

The [SWAPI](https://swapi.co/) let's you view data around objects in the Star Wars universe, like vehicles, people and planets. This project allows fetching of data using the [GraphQL](https://graphql.org/) standard to abstract away from REST API requests to [SWAPI](https://swapi.co/).

Advantages of this wrapper:

- Select just the fields you need.
- Combine object type results (e.g. vehicles and planets) below each other in a single query.
- TO BE COMPLETED: Use a single query to unpack nested data, such as residents on a planet. The wrapper handles the extra requests needed to lookup the object based on their IDs, however this can take longer when fetching many objects.

## Background

I attended an introductory GraphQL workshop at [Codebridge](https://codebridge.org.za/). An exercise at the end was of the one section was to use [NodeJS](https://nodejs.org/en/) and [graphql-js](https://graphql.org/graphql-js/) to build a GraphQL wrapper around an existing REST API. I decided on a Star Wars API ([SWAPI](https://swapi.co/)) which I'd found before and that turned into this repo.

Graph data is all about nodes and how they relate to each other, hence the title of this project.


## Installation

### Install OS-level dependencies

Install [NodeJS](https://nodejs.org/en/).

```bash
# Mac OS
brew install node

# Linux - Debian
sudo apt install nodejs
```

Clone this repo.

```bash
$ git clone https://github.com/MichaelCurrin/luke-i-am-your-parent-node.git
$ cd luke-i-am-your-parent-node
```

### Setup project packages

```bash
$ npm install
```


## Usage

Run the main script. For now with fixed input.

```bash
$ npm run main
Requesting: https://swapi.co/api/planets/1/
{
    "data": {
        "planet": {
            "climate": "arid",
            "name": "Tatooine",
            "terrain": "desert",
            "gravity": "1 standard",
            "orbital_period": "304",
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "residents": [
                "https://swapi.co/api/people/1/",
                "https://swapi.co/api/people/2/",
                "https://swapi.co/api/people/4/",
                "https://swapi.co/api/people/6/",
                "https://swapi.co/api/people/7/",
                "https://swapi.co/api/people/8/",
                "https://swapi.co/api/people/9/",
                "https://swapi.co/api/people/11/",
                "https://swapi.co/api/people/43/",
                "https://swapi.co/api/people/62/"
            ]
        }
    }
}
...
```
