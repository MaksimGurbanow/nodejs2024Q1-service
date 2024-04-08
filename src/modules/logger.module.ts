import { Module } from '@nestjs/common';
import { EnhancedLoggingService } from 'src/core/services/loger.service';

@Module({
  exports: [EnhancedLoggingService],
  providers: [EnhancedLoggingService],
})
export class LoggerModule {}
