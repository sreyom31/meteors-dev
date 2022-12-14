import dotenv from 'dotenv';
import path from 'path';
import z from 'zod';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test']),
  PORT: z.string().default('5000'),
  DB_URL: z
    .string()
    .startsWith('mongodb+srv://', { message: 'Must provide a MongoDB URL' }),
  JWT_SECRET: z.string(),
  JWT_QRCODE_SECRET: z.string(),
  JWT_ACCESS_EXPIRATION_MINUTES: z.string().default('60'),
  JWT_REFRESH_EXPIRATION_DAYS: z.string().default('15'),
  JWT_RESET_PASSWORD_EXPIRATION_MINUTES: z.string().default('20'),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.string(),
  EMAIL_USERNAME: z.string(),
  EMAIL_PASSWORD: z.string(),
  EMAIL_FROM: z.string(),
  SENDGRID_USERNAME: z.string(),
  SENDGRID_PASSWORD: z.string(),
  // JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: z.number().default(20),
});

const envVars = envSchema.safeParse(process.env);
if (!envVars.success) {
  throw new Error(
    envVars.error.issues
      .map((error) => `${error.path} ${error.message}`)
      .join('\n')
  );
}

export default {
  env: envVars.data.NODE_ENV,
  port: envVars.data.PORT,
  mongoose: {
    url:
      envVars.data.DB_URL + (envVars.data.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ignoreUndefined: true,
    },
  },
  jwt: {
    secret: envVars.data.JWT_SECRET,
    qrCodeSecret: envVars.data.JWT_QRCODE_SECRET,
    accessExpirationMinutes: envVars.data.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.data.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes:
      envVars.data.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes:
      envVars.data.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  email: {
    dev_host: envVars.data.EMAIL_HOST,
    dev_username: envVars.data.EMAIL_USERNAME,
    dev_password: envVars.data.EMAIL_PASSWORD,
    dev_port: envVars.data.EMAIL_PORT,
    dev_from: envVars.data.EMAIL_FROM,
    prod_username: envVars.data.SENDGRID_USERNAME,
    prod_password: envVars.data.SENDGRID_PASSWORD,
  },
};
