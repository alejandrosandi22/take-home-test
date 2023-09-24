import Commits from '@/components/Commits';
import Nav from '@/components/Nav';
import { Providers } from './providers';

export default function Home() {
  return (
    <Providers>
      <main className='bg-primary min-h-screen'>
        <Nav />
        <div className='w-full grid grid-cols-1 md:grid-cols-2 p-10'>
          <Commits />
          <div />
        </div>
      </main>
    </Providers>
  );
}
