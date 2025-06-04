import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

console.log('DATABASE_URL from process.env:', process.env.DATABASE_URL);

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!), // แปลงเป็นตัวเลข
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE!,
  },
});
