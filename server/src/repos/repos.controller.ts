import { Controller, Get, Param, Query } from '@nestjs/common';
import { RepoService } from './repos.service';

@Controller('repos')
export class RepoController {
  constructor(private repoService: RepoService) {}

  @Get(':owner')
  async getReposByUser(@Param() params) {
    return await this.repoService.getReposByUser(params);
  }

  @Get(':owner/:repo')
  async getSingleRepo(@Param() params) {
    return this.repoService.getSingleRepo(params);
  }

  @Get(':owner/:repo/branches')
  async getBranchesByRepo(@Param() params) {
    const response = await this.repoService.getBranchesByRepo(params);
    response.sort((a, b) => {
      if (a.name === 'main' && b.name !== 'main') {
        return -1;
      } else if (a.name !== 'main' && b.name === 'main') {
        return 1;
      } else {
        return 0;
      }
    });
    return response.map((branch) => ({
      name: branch.name,
    }));
  }

  @Get(':owner/:repo/commits')
  getAllCommits(@Param() params) {
    return this.repoService.getAllCommits(params);
  }

  @Get(':owner/:repo/branch/commits')
  getCommitsByBranch(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Query('branch') branch: string,
  ) {
    return this.repoService.getCommitsByBranch({
      owner,
      repo,
      branch,
    });
  }

  @Get(':owner/:repo/branch/commits/:sha')
  getSingleCommit(@Param() params) {
    return this.repoService.getSingleCommit(params);
  }
}
