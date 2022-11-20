import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ServicesController } from './services/services.controller';
import { ServicesModule } from './services/services.module';
import { ServicesService } from './services/services.service';

@Module({
  imports: [
    PrismaModule,
    ServicesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, ServicesController],
  providers: [AppService, ServicesService],
})
export class AppModule {}
