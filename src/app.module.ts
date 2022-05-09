import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RacasController } from './racas.controller';

@Module({
  imports: [],
  controllers: [AppController, RacasController],
  providers: [AppService],
})
export class AppModule {}
