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

  async getBranchesFromRepo(params) {
    return await this.octokit
      .request('GET /repos/{owner}/{repo}/branches', {
        owner: params.owner,
        repo: params.repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((res) => res.data);
  }

  async getCommitsByBranch(params) {
    return await this.octokit
      .request('GET /repos/{owner}/{repo}/commits/:commit_sha', {
        owner: params.owner,
        repo: params.repo,
        commit_sha: params.commit_sha,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((res) => res.data);
  }

  async getAllCommits(params) {
    return await this.octokit
      .paginate('GET /repos/{owner}/{repo}/commits', {
        owner: params.owner,
        repo: params.owner,
        per_page: 100,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((res) => res.data);
  }

  async getSingleCommit(params) {
    return await this.octokit
      .paginate('GET /repos/{owner}/{repo}/git/commits/:commit_sha', {
        owner: params.owner,
        repo: params.owner,
        commit_sha: params.commit_sha,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((res) => res.data);
  }
}
