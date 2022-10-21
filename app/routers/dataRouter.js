import { Router } from 'express';

import controllerHandler from '../helpers/controllerHandler.js';
import controller from '../controllers/controller.js';

const router = Router();

router
	.route('')
	/**
	 * GET /
	 * @summary Get all data
	 * @tags Data
	 * @return {[Data]} 200 - success response - application/json
	 * @return {ApiError} 400 - Bad request response - application/json
	 */
	.get(controllerHandler(controller.getAll))

	/**
	 * POST /
	 * @summary Create a data
	 * @tags Data
	 * @param {number} request.body.required - data info
	 * @return {Data} 200 - success response - application/json
	 * @return {ApiError} 400 - Bad request response - application/json
	 * @example request - example payload
	 * {
	 *   "column1": "value1",
	 *   "column2": "value2",
	 *   "column3": "value3",
	 * }
	 */
	.post(controllerHandler(controller.create));

router
	.route('/:id(\\d+)')
	/**
	 * GET /{id}
	 * @summary Get one data
	 * @tags Data
	 * @param {number} id.path.required - data identifier
	 * @return {Data} 200 - success response - application/json
	 * @return {ApiError} 400 - Bad request response - application/json
	 * @return {ApiError} 404 - Data not found - application/json
	 */
	.get(controllerHandler(controller.getOne))

	/**
	 * PATCH /{id}
	 * @summary Update one data
	 * @tags Data
	 * @param {number} id.path.required - data identifier
	 * @return {Data} 200 - success response - application/json
	 * @return {ApiError} 400 - Bad request response - application/json
	 * @return {ApiError} 404 - Data not found - application/json
	 * @example request - example payload
	 * {
	 *   "column1": "value1",
	 *   "column2": "value2",
	 *   "column3": "value3",
	 * }
	 */
	.patch(controllerHandler(controller.update))

	/**
	 * DELETE /{id}
	 * @summary Delete one data
	 * @tags Data
	 * @param {number} id.path.required - data identifier
	 * @return 204 - success response - application/json
	 * @return {ApiError} 400 - Bad request response - application/json
	 * @return {ApiError} 404 - Data not found - application/json
	 */
	.delete(controllerHandler(controller.delete));

export default router;
