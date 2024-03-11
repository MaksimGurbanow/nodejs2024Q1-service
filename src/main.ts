import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swaggerConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4000;

  await setupSwagger(app);

  await app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });
}
bootstrap();
