import { Module } from '@nestjs/common';
import { CryptographyController } from './algorithms/cryptography/cryptography.controller';
import { GraphController } from './algorithms/graph/graph.controller';
import { ImageProcessingController } from './algorithms/image-processing/image-processing.controller';
import { LinkedListController } from './algorithms/linked-list/linked-list.controller';
import { MathController } from './algorithms/math/math.controller';
import { MlController } from './algorithms/ml/ml.controller';
import { SearchController } from './algorithms/search/search.controller';
import { SetsController } from './algorithms/sets/sets.controller';
import { SortingController } from './algorithms/sorting/sorting.controller';

@Module({
  controllers: [
    CryptographyController,
    GraphController,
    ImageProcessingController,
    LinkedListController,
    MathController,
    MlController,
    SearchController,
    SetsController,
    SortingController,
  ],
})
export class AppModule {}
