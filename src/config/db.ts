import { registerAs } from '@nestjs/config';
import { string } from 'zod';

export default registerAs('database', () => ({
  url: process.env.DATABASE_URL,
}));

export const databaseSchema = {
  DATABASE_URL: string().min(1).url(),
};
