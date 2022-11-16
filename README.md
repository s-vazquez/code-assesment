# GraphQL-Next-React Code Assesment

## What is this?
This repository is a boilerplate application that contains:
- Nx: as the monorepo build system.
- Next.js: As the http/web server and SSR engine.
- Apollo: As the library to consume GraphQL API.
- React: As the frontend library.

## Your task

Create a React web app that expose the trend movies retrieved from [The Movie Database GraphQL Wrapper](https://github.com/nerdsupremacist/tmdb)'s https://tmdb.apps.quintero.io/ GraphQL endpoint. The app will have to contain the following details:

- A dedicated Nx library for the React components created.
- A simple list with infinity scroll that will show a 2 x M (two by M) grid showing a card component for each movie containing:
    - Images
    - Title
    - Genres
    - Run time
    - Release date
- The corresponding query to consume this information from the API.
- A "single" command startup.

## Extras

- Unit testing for the created components.
- A dockerized version of your app that can be simply deployed.
