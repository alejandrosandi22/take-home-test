'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@nextui-org/react';
import Link from 'next/link';

interface UserDropdownProps {
  avatar: string;
  name: string;
  website: string;
  username: string;
}

export default function UserDropdown({
  avatar,
  name,
  username,
  website,
}: UserDropdownProps) {
  return (
    <div className='flex items-center gap-4'>
      <Dropdown placement='bottom-start'>
        <DropdownTrigger>
          <User
            as='button'
            avatarProps={{
              isBordered: true,
              src: avatar,
            }}
            className='text-gray-50 transition-transform'
            description={`@${username}`}
            name={name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label='User Actions' variant='flat'>
          <DropdownItem key='website'>
            <Link href={website} target='_blank'>
              Visit website
            </Link>
          </DropdownItem>
          <DropdownItem key='profile'>
            <Link href={`https://github.com/${username}`} target='_blank'>
              Visit profile
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
