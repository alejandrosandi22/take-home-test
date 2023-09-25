'use client';

import { getBranchesByRepoService } from '@/services/Repos';
import { useQuery } from 'react-query';
import CommitsList from '../CommitsList';
import Filters from '../Filters';

const GITHUB_USERNAME = 'alejandrosandi22';
const GITHUB_REPO_NAME = 'take-home-test';

export default function Commits() {
  const { data } = useQuery('branchFromRepo', async () => {
    return await getBranchesByRepoService(GITHUB_USERNAME, GITHUB_REPO_NAME);
  });
  return (
    <section className='h-full w-full'>
      <div className='flex w-full flex-wrap items-center justify-between'>
        <h2 className='text-2xl font-semibold text-gray-50'>Commits history</h2>
        <Filters data={data} />
      </div>
      <CommitsList />
    </section>
  );
}
