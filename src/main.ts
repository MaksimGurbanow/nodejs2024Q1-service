import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swaggerConfig';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.PORT || 4000;

  await setupSwagger(app);

  await app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });
}
bootstrap();
