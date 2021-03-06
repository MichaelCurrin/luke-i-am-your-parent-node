# Luke, I Am Your Parent Node
> GraphQL wrapper around the Star Wars API

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/luke-i-am-your-parent-node)](https://github.com/MichaelCurrin/luke-i-am-your-parent-node/tags/?include_prereleases&sort=semver)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Made with Node.js](https://img.shields.io/badge/Made_with-Node.js-blue.svg?logo=javascript)](https://nodejs.org)
[![Made with GraphQL](https://img.shields.io/badge/Made_with-GraphQL-blue.svg?logo=graphql)](https://graphql.org)


## About

This is experiment is build a GraphQL API around an existing REST API and then query the GraphQL and print the output. Note that there is no GraphQL server here, but one could be setup using a library.

This was built around [swapi.co](https://swapi.co/) and now it uses [swapi.dev](https://swapi.dev/), a forked project which has the same or similar API.


## Purpose

The Star Wars API (SWAPI) let's you view data around objects in the Star Wars universe, like vehicles, people and planets.

This project allows fetching of data from that REST API using the [GraphQL](https://graphql.org/) standard to abstract away the rests.

This project is built on Node do the queryies and print results.

This is a simple, fun project and is not meant to be complete or up to date.


## Explore the API

These are accessible in the browser easily using the Django interface.

- https://swapi.dev
- https://swapi.dev/api/ (API root)
- https://swapi.dev/api/people/
- https://swapi.dev/api/planets/
- https://swapi.dev/api/planets/1/
- https://swapi.dev/api/starships/9/


## Features

Advantages of this wrapper:

- Select just the fields you need.
- Combine object type results (e.g. vehicles and planets) below each other in a single query.

A demo script is supplied to test the requests.


## Background

I attended an introductory GraphQL workshop at [CodeBridge](https://codebridge.org.za/). An exercise at the end was of the one section was to use [NodeJS](https://nodejs.org/en/) and [graphql-js](https://graphql.org/graphql-js/) to build a GraphQL wrapper around an existing REST API. I decided on the Star Wars API which I'd found before and that used that for this repo.

Graph data is all about _nodes_ and how they relate to each other, hence the title of this project and a variation of a classic line in Star Wars.


## Installation

### Install system dependencies

Install Node.js and NPM - follow [instructions](https://gist.github.com/MichaelCurrin/aa1fc56419a355972b96bce23f3bccba).

Clone this repo:

```bash
$ git clone https://github.com/MichaelCurrin/luke-i-am-your-parent-node.git
$ cd luke-i-am-your-parent-node
```

### Install project packages

```bash
$ npm install
```


## Usage

Run the demo script.

```sh
$ npm run demo
```

This runs [index.js](/src/index.js). It even does nested queries a Films to convert to the Planet URL strings into planet objects.

It has hardcoded inputs so takes no arguments.

Also note that the queries are queued up and the URLs logged, then each query response is logged.

Sample output, truncated for readability:

```
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


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
