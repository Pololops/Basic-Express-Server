# Basic API Backend architecture

Here is the architecture of a basic Node and Express API with CORS and PG Client

This project is available in two syntaxes:
- Node.js "require" statements in the main branche
- ES6 import statements in the ES6_imports branche


- **index.js** : the start point of the server
- **app.js** : the configuration file of the Express server
- **Routers Folder**:
  - Routers/dataRouter.js : a sub router to manage routes of a fake data model
  - Routers/index.js: the connetion point with the express app server. It manages the sub routers and error middlewares
- **Errors Manager** :
  - A custom class nammed ApiError : Class ApiError
  - A custom middleware to manage all the errors
- **Database Config** :
  - A connection Pool with a Postgres database


## Configurations:

### Install NPM dependencies:
```sh
npm i
```

### Deploy a database

### Add environment variables:
> In a .env file at the root of the project :
```sh
PORT=5000
DB_URL=postgres://admin:password@host:port/dbName
CORS_DOMAINS=localhost
```

### Start the server
```sh
npm run dev # in development

npm start # in production
```