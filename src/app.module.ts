import { Module } from '@nestjs/common';
import { CryptographyController } from './algorithms/cryptography/cryptography.controller';

@Module({
  controllers: [CryptographyController],
})
export class AppModule {}
