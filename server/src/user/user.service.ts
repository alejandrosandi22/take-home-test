import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class UserService {
  private octokit;
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_ACCESS_TOKEN,
    });
  }

  async getUser(params) {
    return await this.octokit.request('GET /users/{username}', {
      username: params.username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }
}
