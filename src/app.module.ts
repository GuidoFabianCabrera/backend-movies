import { Module, HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { MovieModule } from './movie/movie.module';
import { ActorModule } from './actor/actor.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({}),
    }),
    HttpModule,
    MovieModule,
    ActorModule,
    UserModule,
    AuthModule,
    DatabaseModule
  ],
  providers: [
    // AuthService
  ],
})
export class AppModule { }
