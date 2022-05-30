import { registerAs } from '@nestjs/config';
import { dbType } from './dbType';

export default registerAs('database', () => ({
  name: process.env.DB_NAME,
  type: process.env.DB_TYPE as dbType,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: true,
  migrationsTableName: 'migrations',
}));
