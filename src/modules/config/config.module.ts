import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from '../../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        process.env.NODE_ENV === 'TEST' ? '.env.test' : '.env.dev',
      ],
      cache: true,
      load: [databaseConfig],
    }),
  ],
})
export class ConfigurationModule {}
