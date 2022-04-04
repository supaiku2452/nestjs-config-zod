import { object } from 'zod';
import { serverSchema } from './server';
import { databaseSchema } from './db';

export const validate = (config: Record<string, unknown>) =>
  object({
    ...serverSchema,
    ...databaseSchema,
  }).parse(config);
