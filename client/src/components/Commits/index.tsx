import CommitCard from '../CommitsCard';
import Filters from '../Filters';

export default function Commits() {
  return (
    <section className='w-full h-full'>
      <div className='w-full flex items-center justify-between'>
        <h2 className='text-gray-50 text-2xl font-semibold'>Commits history</h2>
        <Filters />
      </div>
      <div className='py-5 space-y-3 h-full'>
        <CommitCard />
        <CommitCard />
        <CommitCard />
        <CommitCard />
        <CommitCard />
        <CommitCard />
      </div>
    </section>
  );
}
