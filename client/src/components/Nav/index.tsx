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
    <header className='w-full px-10 bg-primary border-b border-b-gray-500 h-20'>
      <nav className='w-full flex gap-3 items-center h-full'>
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
        <div className='h-7 w-px bg-gray-500 rotate-12' />
        <Link
          href={`https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}`}
          target='_blank'
          className='text-gray-50 hover:bg-primary-hover py-2 px-3 rounded-xl'
        >
          {GITHUB_REPO_NAME}
        </Link>
      </nav>
    </header>
  );
}
