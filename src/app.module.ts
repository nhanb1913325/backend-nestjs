import { Module } from '@nestjs/common';
import { CryptographyController } from './algorithms/cryptography/cryptography.controller';
import { GraphController } from './algorithms/graph/graph.controller';

@Module({
  controllers: [CryptographyController, GraphController],
})
export class AppModule {}
