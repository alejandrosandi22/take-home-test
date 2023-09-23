import { Module } from '@nestjs/common';
import { RepoModule } from './repos/repos.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, RepoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
