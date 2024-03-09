import { Module } from '@nestjs/common';
import { AppController } from './infrasctructure/controllers/app.controller';
import { AppService } from './core/services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
