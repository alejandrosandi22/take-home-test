'use client';

import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

export default function CommitCard({ author, commit, sha }: GithubCommit) {
  return (
    <Link
      href={sha}
      className='w-full space-y-2 rounded-2xl border border-gray-50 px-8 py-5 text-start text-gray-50 hover:bg-primary-hover'
    >
      <div className='flex flex-wrap justify-between'>
        <div className='flex items-end gap-2'>
          <h2 className='text-base font-medium'>{commit.message}</h2>
        </div>
        <h5 className='text-base'>{moment(commit.author.date).format('L')}</h5>
      </div>
      <div className='flex gap-2'>
        <Image
          src={author.avatar_url}
          alt={`${author.login} avatar`}
          width={25}
          height={25}
          className='rounded-full'
        />
        <h6 className='text-base'>@{author.login}</h6>
      </div>
    </Link>
  );
}
