'use client';

import { Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import moment from 'moment';

interface SingleCommitProps {
  data: GithubCommit;
}

export default function SingleCommit({ data }: SingleCommitProps) {
  return (
    <Card className='bg-primary-color dark lg:w-[450px]'>
      <CardHeader className='flex gap-3'>
        <Image
          alt={data.commit.author.name}
          height={40}
          src={data.author.avatar_url}
          width={40}
          className='rounded-full'
        />
        <div className='flex flex-col'>
          <p className='text-md'>{data.commit.author.name}</p>
          <p className='text-small text-default-500'>@{data.author.login}</p>
        </div>
      </CardHeader>
      <CardBody className='space-y-2.5'>
        <div className='flex w-full flex-wrap gap-x-2 gap-y-2 pb-5 text-gray-50'>
          <div className='flex items-center gap-2 rounded-2xl bg-primary-hover px-3 py-2 font-medium'>
            {data.stats.total}
            <span className='font-normal'>total</span>
          </div>
          <div className='flex items-center gap-2 rounded-2xl bg-primary-hover px-3 py-2 font-medium'>
            {data.stats.additions}
            <span className='font-normal'>additions</span>
          </div>
          <div className='flex items-center gap-2 rounded-2xl bg-primary-hover px-3 py-2 font-medium'>
            {data.stats.deletions}
            <span className='font-normal'>deletions</span>
          </div>
        </div>
        <p className='text-tiny font-bold uppercase'>Date:</p>
        <small className='text-default-500'>
          {moment(data.commit.author.date).format('L')}
        </small>
        <Divider />
        <p className='text-tiny font-bold uppercase'>Message:</p>
        <small className='text-default-500'>{data.commit.message}</small>
        <Divider />
        <p className='text-tiny font-bold uppercase'>Files:</p>
        <ul className='max-h-[100px] overflow-y-auto 2xl:max-h-[300px]'>
          {data.files.map((file) => (
            <li key={file.sha}>
              <small className='text-default-500'>{file.filename}</small>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
