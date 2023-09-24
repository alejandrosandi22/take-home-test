'use client';

import { Select, SelectItem } from '@nextui-org/react';

const branches = [
  {
    name: 'All branches',
    sha: 'value1',
  },
  {
    name: 'main',
    sha: 'value2',
  },
];

export default function Filters() {
  return (
    <div className='w-36'>
      <Select
        placeholder='All branches'
        labelPlacement='outside'
        className='w-36'
      >
        {branches.map((branch) => (
          <SelectItem key={branch.sha} value={branch.sha}>
            {branch.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
