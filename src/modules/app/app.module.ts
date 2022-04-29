import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { CaslModule } from '../casl/casl.module';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'],
      cache: true,
    }),
    UsersModule,
    DatabaseModule,
    AuthModule,
    CaslModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
