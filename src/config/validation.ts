import { object } from 'zod';
import { serverSchema } from './server';
import { databaseSchema } from './db';

export const validate = (config: Record<string, unknown>) => {
  try {
    return object({
      ...serverSchema,
      ...databaseSchema,
    }).parse(config);
  } catch (error) {
    console.error(error);
  }
};
