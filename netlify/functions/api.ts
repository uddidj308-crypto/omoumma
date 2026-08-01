import serverless from 'serverless-http';
import { createApiApp } from '../../src/apiApp';

const app = createApiApp();

export const handler = serverless(app);
