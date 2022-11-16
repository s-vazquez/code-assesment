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
- Create a function to query all the popular movies.
- A simple list with infinity scroll that will show a 2 x M (two by M) grid showing a card component for each movie obtained in previous step, containing:
    - Images
    - Title
    - Genres
    - Run time
    - Release date
- Use a function to determine how many movies will be retrieved in next pull on the infinite scroll, the function will be something like:
```typescript
const incrementer = (startWith: number) => {
  let prev = startsWith;
  return (): number => prev + 1
}
```
So on every newxt update the infinite scroll will call the incrementer to pull only one more movie from the previous pagination cursor.
- Modify the previous function so scroll can call it to get next amount of movies to be pulled so:
  - On firs update: 1 movie will be pulled
  - 2dn update: 2 movies will be pulled
  - 3rd update: 4 movies will be pulled
  - ...
  - 6th update (and following ones): 20 items on every update



## Extras

- Unit testing for the created components.
- A dockerized version of your app that can be simply deployed.
