import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Farmácia da Bianca')
    .setDescription('Projeto Final do Bloco 02 - Generation Brasil')
    .setContact("Bianca Caetano","https://github.com/biancacaetano","bianca@email.com")
    .setVersion('1.0')
    .addBearerAuth() // <--- ESSA LINHA É A CHAVE PARA O DEPLOY FUNCIONAR COM SEGURANÇA
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document); // Rota para acessar: localhost:4000/swagger
  
  // 2. Configurações Globais
  process.env.TZ = '-03:00'; // Timezone de Brasília
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(); // Fundamental para o Front-end conseguir acessar a API

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
