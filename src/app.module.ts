import { Module } from '@nestjs/common';
import { CryptographyController } from './algorithms/cryptography/cryptography.controller';
import { GraphController } from './algorithms/graph/graph.controller';
import { ImageProcessingController } from './algorithms/image-processing/image-processing.controller';
import { LinkedListController } from './algorithms/linked-list/linked-list.controller';
import { MathController } from './algorithms/math/math.controller';
import { MlController } from './algorithms/ml/ml.controller';

@Module({
  controllers: [
    CryptographyController,
    GraphController,
    ImageProcessingController,
    LinkedListController,
    MathController,
    MlController,
  ],
})
export class AppModule {}
