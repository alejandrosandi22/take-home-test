const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function getSingleRepoService(
  username: string,
  repo: string,
): Promise<Repository> {
  const response = await fetch(`${BASE_API_URL}/repos/${username}/${repo}/`);

  const data = await response.json();
  return data;
}

export async function getCommitsService(
  username: string,
  repo: string,
): Promise<GithubCommit[]> {
  const response = await fetch(
    `${BASE_API_URL}/repos/${username}/${repo}/commits`,
  );

  const data = await response.json();
  return data;
}

export async function getBranchesByRepoService(
  username: string,
  repo: string,
): Promise<GithubBranch[]> {
  const response = await fetch(
    `${BASE_API_URL}/repos/${username}/${repo}/branches`,
  );
  const data = await response.json();
  return data;
}

export async function getCommitsByBranch(
  username: string,
  repo: string,
  branch: string,
): Promise<GithubCommit[] | null> {
  if (!branch) return null;
  const response = await fetch(
    `${BASE_API_URL}/repos/${username}/${repo}/branch/commits?branch=${branch}`,
  );
  const data = await response.json();
  return data;
}

export async function getSingleCommitService(
  username: string,
  repo: string,
  sha: string,
) {
  const response = await fetch(
    `${BASE_API_URL}/repos/${username}/${repo}/branch/commits/${sha}`,
  );
  const data = await response.json();
  return data;
}
