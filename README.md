# Q-Agency

Welcome to Q-Agency, a posts and comments application built on top of the "https://jsonplaceholder.typicode.com" endpoint.

## Introduction

This application comprises three main pages:

- **Home:** Accessible via the route ('/'), providing a link to the '/posts' page and hosting my CV.
- **Posts:** Accessible via the route ('/posts'), displaying 100 posts fetched from "https://jsonplaceholder.typicode.com," along with associated comments and authors.
- **Post Details:** Accessible via the route ('/post/{id}'), offering details about an individual post based on the URL parameter.

## How to Run

Create a `.env` file and copy contents from `sample-env` to the newly created file.

### Using Docker, prod version

If you have Docker installed on your machine, follow these steps:

1. Build the Docker image:

   docker build -t q-task .

2. Run the Docker container:

   docker run -p 8080:80 -d q-task

   Visit http://localhost:8080/ to explore the app.

### Without Docker

If you don't have/want to use Docker, follow these steps:

1. Install dependencies:

   yarn install

2. Start the development version of the project:

   yarn dev

3. Build the project:

   yarn build

4. Run the production version of the project:

   yarn preview

## Notes

- "yarn dev" will start the development version of the project.
- "yarn preview" will run the production version of the project.
- In order to see logger messages with proper Component names use development version, in production we have minification and logging doesn't behave in the same way

## Conclusion

Thank you for exploring Q-Agency! Have fun, and enjoy!
