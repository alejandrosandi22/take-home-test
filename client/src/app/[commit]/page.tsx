import SingleCommit from '@/components/SingleCommit';
import { getSingleCommitService } from '@/services/Repos';
import Link from 'next/link';

const GITHUB_USERNAME = 'alejandrosandi22';
const GITHUB_REPO_NAME = 'take-home-test';

async function getSingleCommit(sha: string) {
  return await getSingleCommitService(GITHUB_USERNAME, GITHUB_REPO_NAME, sha);
}

export default async function Page({ params }: { params: { commit: string } }) {
  const data = await getSingleCommit(params.commit);
  return (
    <main className='bg-primary-color flex h-full min-h-[620px] w-full flex-col items-center justify-center px-10'>
      <div className='lg:w-[450px]'>
        <Link href='/' className='mb-10 flex gap-2 text-sm text-gray-50'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-arrow-back'
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
            <path d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1' />
          </svg>
          Go back
        </Link>
      </div>
      {data && <SingleCommit data={data} />}
    </main>
  );
}
