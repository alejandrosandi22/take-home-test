'use client';

export default function CommitCard() {
  return (
    <button className='rounded-2xl border text-gray-50 border-gray-50 w-full py-5 px-8 space-y-2 hover:bg-primary-hover'>
      <div className='flex justify-between'>
        <div className='flex items-end gap-2'>
          <h2 className='text-xl font-medium'>[Commit]</h2>
          <h5 className='text-base'>[Author]</h5>
        </div>
        <h6 className='text-lg font-medium'>[id]</h6>
      </div>
      <div>
        <p className='text-base text-start'>[Message]</p>
      </div>
    </button>
  );
}
