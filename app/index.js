const express = require('express');
const cors = require('cors');

const router = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
	origin: process.env.CORS_DOMAINS ?? true,
};
app.use(cors(corsOptions));

app.use(router);

module.exports = app;
