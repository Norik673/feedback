import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { TargetModule } from './targets/targets.module';
import { FeedbackModule } from './feedbacks/feedbacks.module';
import { TargetOptionModule } from './target-options/target-options.module';
import { AuthModule } from './auth/auth.module';
import {CacheModule} from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis';

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
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: redisStore as any,
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || '6379'),
        ttl: 3600,
      }),
      isGlobal: true,
    }),
    
    TargetModule, FeedbackModule, TargetOptionModule, AuthModule]
})
export class AppModule {}