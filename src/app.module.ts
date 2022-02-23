import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { TreesModule } from './trees/trees.module';
import { Tree } from './trees/entities/tree.entity';
import { MulterModule } from '@nestjs/platform-express';
import { Sport } from './sport/entities/sport.entity';
import { Bird } from './birds/entities/bird.entity';
import { SportModule } from './sport/sport.module';
import { BirdModule } from './birds/bird.module';
@Module({
    imports: [
      AuthModule,
      UsersModule,
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'nodejs',
        password: 'nodejs',
        database: 'jest',
        entities: [Users, Tree,Sport, Bird  ],
        synchronize: true,
      }),
      TreesModule,
      SportModule,
      BirdModule
    ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
