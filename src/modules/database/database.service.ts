import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ContactInformation } from '../users/entities/contactInfo.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  get isTest(): boolean {
    return process.env.NODE_ENV === 'TEST';
  }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: this.configService.get<string>('database.name'),
      type: 'postgres',
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
      autoLoadEntities: this.configService.get<boolean>(
        'database.autoLoadEntities',
      ),
      entities: this.isTest
        ? [User, ContactInformation]
        : ['/src/**/*.entity.{ts,js}'],
      logging: true,
      migrationsTableName: 'migrations',
      synchronize: false,
      migrations: this.isTest
        ? [__dirname + '/migrations/*{.ts,.js}']
        : ['/src/migrations/**/*{.ts,.js}'],
      migrationsRun: true,
      cli: {
        migrationsDir: './src/migrations',
        entitiesDir: './src/modules/users/entities',
      },
    } as TypeOrmModuleOptions;
  }
}
