import { Router } from 'express';

import errorHandler from '../helpers/errorHandler.js';
import ApiError from '../errors/apiError.js';

import dataRouter from './dataRouter.js';

const router = Router();

router.use('/', dataRouter)

router.use(() => {
	throw new ApiError('Endpoint not found', { statusCode: 404 });
});

router.use((err, _, response, next) => {
	errorHandler(err, response, next);
});

export default router;