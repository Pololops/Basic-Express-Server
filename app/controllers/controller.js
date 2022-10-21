const datamapper = require('../models/datamapper');
const ApiError = require('../errors/apiError.js');

module.exports = {
	/**
	 * Controller Method to get a record.
	 * ExpressMiddleware signature
	 * @param {object} request Express req.object (not used)
	 * @param {object} response Express response object
	 * @returns {string} Route API JSON response
	 */
	getAll: async (_, response) => {
		const data = await datamapper.findAll();
		return await response.json(data);
	},

	/**
	 * Controller Method to get a record.
	 * ExpressMiddleware signature
	 * @param {object} request Express req.object
	 * @param {object} response Express response object
	 * @returns {string} Route API JSON response
	 */
	getOne: async (request, response, next) => {
		const id = parseInt(request.params.id);
		const data = await datamapper.findByPk(id);

		if (!data) return next();

		return await response.json(data);
	},

	/**
	 * Controller Method to create a record.
	 * ExpressMiddleware signature
	 * @param {object} request Express req.object
	 * @param {object} response Express response object
	 * @returns {string} Route API JSON response
	 */
	create: async (request, response) => {
		const savedData = await datamapper.insert(request.body);
		return await response.json(savedData);
	},

	/**
	 * Controller Method to update a record.
	 * ExpressMiddleware signature
	 * @param {object} request Express request.object
	 * @param {object} response Express response object
	 * @returns {string} Route API JSON response
	 */
	async update(request, response) {
		const id = parseInt(request.params.id);
		const data = await datamapper.findByPk(id);

		if (!data) {
			throw new ApiError('This data does not exists', {
				statusCode: 404,
			});
		}

		const updatedData = await datamapper.update(id, request.body);
		return response.json(updatedData);
	},

	/**
	 * Controller Method to delete a record.
	 * ExpressMiddleware signature
	 * @param {object} request Express request.object (not used)
	 * @param {object} response Express response object
	 * @returns {string} Route API JSON response
	 */
	async delete(request, response) {
		const id = parseInt(request.params.id);
		const dataToDelete = await datamapper.findByPk(id);

		if (!dataToDelete) {
			throw new ApiError('This data does not exists', {
				statusCode: 404,
			});
		}

		await datamapper.delete(id);
		return response.status(204).json();
	},
};
