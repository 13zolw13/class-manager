import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
  .setTitle('Class Manager API ')
  .setDescription('The Class Manager for teachers and students')
  .setVersion('1.0')
  .addTag('Class Manager')
  .build();
