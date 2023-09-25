import { getSingleRepoService } from '@/services/Repos';

const GITHUB_USERNAME = 'alejandrosandi22';
const GITHUB_REPO_NAME = 'take-home-test';

async function getSingleRepo() {
  return await getSingleRepoService(GITHUB_USERNAME, GITHUB_REPO_NAME);
}

export default async function RepoStats() {
  const data = await getSingleRepo();

  return (
    <div className='flex w-full flex-wrap gap-x-10 gap-y-2 pb-10 text-gray-50'>
      <div className='flex items-center gap-2 rounded-2xl bg-primary-hover px-3 py-2 font-medium'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-eye'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
          <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />
        </svg>
        {data.subscribers_count}
        <span className='font-normal'>watchers</span>
      </div>
      <div className='flex items-center gap-2 rounded-2xl bg-primary-hover px-3 py-2 font-medium'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-star'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
        </svg>
        {data.stargazers_count}
        <span className='font-normal'>stars</span>
      </div>
      <div className='flex items-center gap-2 rounded-2xl bg-primary-hover px-3 py-2 font-medium'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-git-fork text-gray-50'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2' />
          <path d='M12 12l0 4' />
        </svg>
        {data.forks}
        <span className='font-normal'>forks</span>
      </div>
    </div>
  );
}
