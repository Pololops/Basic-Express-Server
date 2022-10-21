/**
 * Controller wrapper to manage errors
 * @param {object} controller a controller to execute inside a try… catch… block
 * @returns {object} a controller as middleware function
 */
export default (controller) => async (request, response, next) => {
	try {
		await controller(request, response, next);
	} catch (error) {
		next(error);
	}
};
