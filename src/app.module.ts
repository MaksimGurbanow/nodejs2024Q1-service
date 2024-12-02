import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import JwtAuthGuard from './auth/guards/jwtAuth.guard';
import { EnhancedLoggingService } from './core/services/loger.service';
import { AlbumModule } from './modules/album.module';
import { ArtistModule } from './modules/artist.module';
import { AuthModule } from './modules/auth.module';
import { LoggerModule } from './modules/logger.module';
import { PrismaModule } from './modules/prisma.module';
import { TrackModule } from './modules/track.module';
import { UserModule } from './modules/user.module';
import { FavoritesModule } from './modules/favorites.module';
import { CoreModule } from './utils/modules/coreModule';
import { CustomHttpExceptionFilter } from './utils/handlers/customHttpException';
import { HttpRequestLoggerMiddleware } from './utils/middlewares/requestLogger';

@Module({
  imports: [
    CoreModule,
    UserModule,
    AlbumModule,
    ArtistModule,
    FavoritesModule,
    TrackModule,
    PrismaModule,
    LoggerModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: CustomHttpExceptionFilter,
    },
    EnhancedLoggingService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpRequestLoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
