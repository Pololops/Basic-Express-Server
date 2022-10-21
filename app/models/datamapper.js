import client from '../config/database.js';

/**
 * @typedef {object} Data
 * @property {number} id - The unique id in db
 * @property {string} column1 - The first column in db
 * @property {string} column2 - The second column in db
 * @property {string} column3 - The third column in db
 */

/**
 * @typedef {Object} InputData
 * @property {string} column1 - The first column in db
 * @property {string} column2 - The second column in db
 * @property {string} column3 - The third column in db
 */

export default {
	/**
	 * Find all records in database
	 * @returns {Data[]} - All data in database
	 */
	findAll: async () => {
		const result = await client.query(
			`SELECT * 
				 FROM db_table;`,
		);

		return result.rows;
	},

	/**
	 * Find a record by its id in database
	 * @param {number} dataId - The wish data id
	 * @returns {(Data|undefined)} - The wish data or undefined if no data has this id
	 */
	findByPk: async (id) => {
		const result = await client.query(
			`SELECT * 
				 FROM db_table 
				 WHERE id = $1;`,
			[id],
		);

		return await result.rows[0];
	},

	/**
	 * Create a record in database
	 * @param {InputData} data - The data to insert
	 * @returns {Data} - The inserted data
	 */
	insert: async (data) => {
		const savedData = await client.query(
			`INSERT INTO db_table 
				 (column1, column2, column3) 
				 VALUES ($1, $2, $3) 
				 RETURNING *;`,
			[data.column1, data.column2, data.column3],
		);

		return await savedData.rows[0];
	},

	/**
	 * Update a record in database
	 * @param {number} id - The data id to update
	 * @param {InputData} data - The data to modify
	 * @returns {Data} - The updated data
	 */
	update: async (id, data) => {
		const fields = Object.keys(data).map(
			(prop, index) => `"${prop}" = $${index + 1}`,
		);
		const values = Object.values(data);

		const savedData = await client.query(
			`UPDATE db_table SET
				 ${fields}
				 WHERE id = $${fields.length + 1}
				 RETURNING *`,
			[...values, id],
		);

		return savedData.rows[0];
	},

	/**
	 * Delete a record in database
	 * @param {number} id - The data id to delete
	 * @returns {boolean} - The result of the delete
	 */
	delete: async (id) => {
		const result = await client.query(
			`DELETE FROM db_table 
				 WHERE id = $1;`,
			[id],
		);

		return !!result.rowCount;
	},
};
