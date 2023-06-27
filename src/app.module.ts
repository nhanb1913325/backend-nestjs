import { Module } from '@nestjs/common';
import { CryptographyController } from './algorithms/cryptography/cryptography.controller';
import { GraphController } from './algorithms/graph/graph.controller';
import { ImageProcessingController } from './algorithms/image-processing/image-processing.controller';
import { LinkedListController } from './algorithms/linked-list/linked-list.controller';

@Module({
  controllers: [
    CryptographyController,
    GraphController,
    ImageProcessingController,
    LinkedListController,
  ],
})
export class AppModule {}
