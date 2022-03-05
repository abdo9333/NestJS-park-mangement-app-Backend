import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT;



async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(port);
  console.log('Application running on port : ' + port)
  app.enableCors();
}
bootstrap();
