import { registerAs } from '@nestjs/config';
import { number } from 'zod';

export default registerAs('server', () => ({
  port: process.env.PORT,
  timeout: process.env.TIMEOUT,
}));

export const serverSchema = {
  PORT: number().default(3000),
  TIMEOUT: number().gte(3000).lte(30000).default(10000),
};
