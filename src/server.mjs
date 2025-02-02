import express from 'express';

// Internal Imports
import morgan from 'morgan';
import { config } from './config/config.mjs';
import { connectDB } from './db/db.mjs';
import globalErrorHandler from './middlewares/errors/globalErrorHandler.mjs';
import indexRouter from './routes/api/index.mjs';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// Routes
app.use('/api', indexRouter);

// Error Handler
app.use(globalErrorHandler);

app.listen(config.port, config.host, async () => {
	console.log(
		`Server is running in ${config.mode} mode at http://${config.host}:${config.port}`
	);
	await connectDB();
});
