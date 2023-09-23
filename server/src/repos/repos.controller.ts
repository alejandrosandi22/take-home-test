import { Controller, Get, Param } from '@nestjs/common';
import { RepoService } from './repos.service';

@Controller('repos')
export class RepoController {
  constructor(private repoService: RepoService) {}

  @Get(':owner/:repo')
  async getBranchesFromRepo(@Param() params) {
    const data = await this.repoService.getBranchesFromRepo(params);

    return data.map((data) => ({
      name: data.name,
      sha: data.commit.sha,
    }));
  }

  @Get(':owner/:repo/commits')
  getAllCommits(@Param() params) {
    return this.repoService.getAllCommits(params);
  }

  @Get(':owner/:repo/commits/:commit_sha')
  getCommitsByBranch(@Param() params) {
    return this.repoService.getCommitsByBranch(params);
  }

  @Get(':owner/:repo/commit/:commit_sha')
  getSingleCommit(@Param() params) {
    return this.repoService.getSingleCommit(params);
  }
}
