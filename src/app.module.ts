import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path';
import { TargetModule } from './targets/targets.module';
import { FeedbackModule } from './feedbacks/feedbacks.module';
import { TargetOptionModule } from './target-options/target-options.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      autoLoadEntities: true,
      database: 'feedback', 
    }),
    
    TargetModule, FeedbackModule, TargetOptionModule, AuthModule]
})
export class AppModule {}