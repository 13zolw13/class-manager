import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ContactInformation } from '../users/entities/contactInfo.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return process.env.NODE_ENV !== 'TEST'
      ? {
          name: 'default',
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'classmanager',
          autoLoadEntities: true,
          entities: [User, ContactInformation],
          logging: true,
          migrationsTableName: 'migrations',
          synchronize: false,
          migrations: [__dirname + '/migrations/*{.ts,.js}'],
          migrationsRun: true,
          cli: {
            migrationsDir: './src/migrations',
            entitiesDir: './src/modules/users/entities',
          },
        }
      : {
          name: 'default',
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'classmanager_test',
          entities: ['/src/**/*.entity.{ts,js}'],
          // entities: [User],

          logging: true,
          autoLoadEntities: true,
          migrationsRun: true,
          migrations: ['/src/migrations/**/*{.ts,.js}'],
          synchronize: false,
          cli: {
            entitiesDir: './src/modules/users/entities',
            migrationsDir: './src/migrations',
          },
        };
  }
}
