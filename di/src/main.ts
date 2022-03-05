import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';
import {PowerModule} from './power/power.module'

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(3000);
}
bootstrap();
