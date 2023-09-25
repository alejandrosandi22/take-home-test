import { getUserService } from '@/services/User';
import Link from 'next/link';
import UserDropdown from '../UserDropdown';

const GITHUB_USERNAME = 'alejandrosandi22';
const GITHUB_REPO_NAME = 'task-home-test';

async function getUser() {
  return await getUserService(GITHUB_USERNAME);
}

export default async function Nav() {
  const data = await getUser();

  return (
    <header className='bg-primary-color h-[80px] w-full border-b border-b-gray-500 px-10'>
      <nav className='flex h-full w-full items-center gap-3'>
        <div>
          {data && (
            <UserDropdown
              avatar={data.avatar}
              name={data.name}
              website={data.website}
              username={GITHUB_USERNAME}
            />
          )}
        </div>
        <div className='h-7 w-px rotate-12 bg-gray-500' />
        <Link
          href={`https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}`}
          target='_blank'
          className='rounded-xl px-3 py-2 text-gray-50 hover:bg-primary-hover'
        >
          {GITHUB_REPO_NAME}
        </Link>
      </nav>
    </header>
  );
}
