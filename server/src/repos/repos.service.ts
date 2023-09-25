import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class RepoService {
  private octokit;
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_ACCESS_TOKEN,
    });
  }

  async getReposByUser(params) {
    const response = await this.octokit.rest.repos.listForUser({
      username: params.owner,
    });
    return response.data;
  }

  async getSingleRepo(params) {
    const response = await this.octokit.rest.repos.get({
      owner: params.owner,
      repo: params.repo,
    });
    return response.data;
  }

  async getBranchesByRepo(params) {
    const response = await this.octokit.rest.repos.listBranches({
      owner: params.owner,
      repo: params.repo,
    });
    return response.data;
  }

  async getCommitsByBranch(params) {
    return await this.octokit.rest.repos
      .listCommits({
        owner: params.owner,
        repo: params.repo,
        sha: params.branch,
      })
      .then((res) => res.data);
  }

  async getAllCommits(params) {
    return await this.octokit
      .request('GET /repos/{owner}/{repo}/commits', {
        owner: params.owner,
        repo: params.repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((res) => res.data);
  }

  async getSingleCommit(params) {
    const response = await this.octokit.rest.repos.getCommit({
      owner: params.owner,
      repo: params.repo,
      ref: params.sha,
    });

    return response.data;
  }
}
