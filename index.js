import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
	console.log(`✅ Server is listening on : http://localhost:${port}`);
});
