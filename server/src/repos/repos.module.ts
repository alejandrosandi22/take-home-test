import { Module } from '@nestjs/common';
import { RepoController } from './repos.controller';
import { RepoService } from './repos.service';

@Module({
  controllers: [RepoController],
  providers: [RepoService],
})
export class RepoModule {}
