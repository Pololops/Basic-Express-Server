/**
 * Middleware that respond to a next method with an error as argument
 * @param {object} err Error class
 * @param {object} res Express response object
 */
module.exports = (err, res) => {
	let { message } = err;
	let statusCode = err.infos?.statusCode;

	if (!statusCode || Number.isNaN(Number(statusCode))) {
		statusCode = 500;
	}

	return res.status(statusCode).json({
		status: 'error',
		statusCode,
		message,
	});
};
