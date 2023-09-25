import Commits from '@/components/Commits';
import RepoStats from '@/components/RepoStats';
import { Providers } from './providers';

export default function Home() {
  return (
    <Providers>
      <main className='bg-primary-color h-[90vh] overflow-y-auto'>
        <div className='w-full p-10'>
          <RepoStats />
          <Commits />
        </div>
      </main>
    </Providers>
  );
}
