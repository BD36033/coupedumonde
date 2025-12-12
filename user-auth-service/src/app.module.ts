import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: 3306,
      username: process.env.DB_USER || 'trd_user',
      password: process.env.DB_PASSWORD || 'trd_password',
      database: process.env.DB_NAME || 'trd_db',
      autoLoadEntities: true,
      synchronize: true, // À désactiver en production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}