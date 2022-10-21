import pg from 'pg';
const { Pool } = pg;

const config = {
	connectionString: process.env.DB_URL,
};

export default new Pool(config);
