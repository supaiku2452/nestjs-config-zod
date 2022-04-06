import { registerAs } from '@nestjs/config';
import { string } from 'zod';

export default registerAs('server', () => ({
  port: process.env.PORT,
  timeout: process.env.TIMEOUT,
}));

export const serverSchema = {
  PORT: string()
    .min(1)
    .refine(
      (val) => !Number.isNaN(Number(val)),
      (val) => ({ message: `${val} cannot convert to Number.` }),
    ),
  TIMEOUT: string()
    .refine(
      (val) => !Number.isNaN(Number(val)),
      (val) => ({ message: `${val} cannot convert to Number.` }),
    )
    .transform((val) => Number(val))
    .refine(
      (val) => val >= 3000 && val <= 30000,
      (val) => ({
        message: `${val} must be greater than equal 3000 and less then equal 30000.`,
      }),
    ),
};
