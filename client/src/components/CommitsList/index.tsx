'use client';

import { getCommitsByBranch } from '@/services/Repos';
import { useAppSelector } from '@/store/hooks';
import { Spinner } from '@nextui-org/react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import CommitCard from '../CommitsCard';

const GITHUB_USERNAME = 'alejandrosandi22';
const GITHUB_REPO_NAME = 'take-home-test';

export default function CommitsList() {
  const branch = useAppSelector((state) => state.branch);
  const { data, refetch } = useQuery(
    [GITHUB_USERNAME, GITHUB_REPO_NAME, branch.name],
    () => getCommitsByBranch(GITHUB_USERNAME, GITHUB_REPO_NAME, branch.name),
  );

  useEffect(() => {
    refetch();
  }, [branch]);

  return (
    <div className='my-5 flex h-full w-full flex-col items-center space-y-3 py-5 text-gray-50'>
      {data ? (
        data.map((item, index) => (
          <CommitCard key={`${item.sha}-${index}`} {...item} />
        ))
      ) : (
        <div className='py-40'>
          <Spinner color='current' />
        </div>
      )}
    </div>
  );
}
