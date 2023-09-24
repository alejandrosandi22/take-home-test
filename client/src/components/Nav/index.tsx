import Image from 'next/image';

export default function Nav() {
  return (
    <header className='w-full px-10 bg-primary border-b border-b-gray-500 h-20'>
      <nav className='w-full flex gap-3 items-center h-full'>
        <Image
          src=''
          alt=''
          width={50}
          height={50}
          className='rounded-full bg-gray-500'
        />
        <div className='h-7 w-px bg-gray-500 rotate-12' />
        <div className='text-gray-50 hover:bg-primary-hover py-2 px-3 rounded-xl'>
          task-home-test
        </div>
      </nav>
    </header>
  );
}
