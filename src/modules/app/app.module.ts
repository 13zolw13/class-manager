import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CaslModule } from '../casl/casl.module';
import { ConfigurationModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigurationModule,
    UsersModule,
    DatabaseModule,
    AuthModule,
    CaslModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
