import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}
bootstrap();

/*

1- NextFactory class is used to create a Nest application instance.
    - create() return an app object that fulfills the INestApplication interface,
    which provides multiple methods.

2- Here, we startup our HTTP listener, listening for HTTP requests.

3- Specified NestExpressApplication to access the underlying platform API

*/
