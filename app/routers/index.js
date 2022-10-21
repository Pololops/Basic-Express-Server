const { Router } = require('express');

const errorHandler = require('../helpers/errorHandler');
const ApiError = require('../errors/apiError');

const dataRouter = require('./dataRouter');

const router = Router();

router.use('/', dataRouter)

router.use(() => {
	throw new ApiError('Endpoint not found', { statusCode: 404 });
});

router.use((err, _, response, next) => {
	errorHandler(err, response, next);
});

module.exports = router;