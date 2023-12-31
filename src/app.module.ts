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
import { StatisticsController } from './algorithms/statistics/statistics.controller';
import { StringController } from './algorithms/string/string.controller';
import { TreeController } from './algorithms/tree/tree.controller';
import { UncategorizedController } from './algorithms/uncategorized/uncategorized.controller';
//
import { CryptographyTestController } from './algorithms/cryptography-test/cryptography-test.controller';
import { MathTestController } from './algorithms/math-test/math-test.controller';

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
    StatisticsController,
    StringController,
    TreeController,
    UncategorizedController,
    CryptographyTestController,
    MathTestController,
  ],
})
export class AppModule {}
