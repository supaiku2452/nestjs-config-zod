import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './validation';
import dbConf from './db';
import serverConf from './server';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConf, serverConf],
      isGlobal: true,
      validate,
    }),
  ],
})
export class ConfigurationModule {}
