import { Module } from '@nestjs/common';
import { CryptographyController } from './algorithms/cryptography/cryptography.controller';
import { GraphController } from './algorithms/graph/graph.controller';
import { ImageProcessingController } from './algorithms/image-processing/image-processing.controller';

@Module({
  controllers: [
    CryptographyController,
    GraphController,
    ImageProcessingController,
  ],
})
export class AppModule {}
