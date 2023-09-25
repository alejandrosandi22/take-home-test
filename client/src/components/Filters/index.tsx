'use client';

import { useAppDispatch } from '@/store/hooks';
import { setBranch } from '@/store/reducers/branchReducer';
import { Select, SelectItem } from '@nextui-org/react';

interface FiltersProps {
  data: GithubBranch[] | undefined;
}

export default function Filters({ data }: FiltersProps) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Select
        placeholder='main'
        labelPlacement='outside'
        className='w-44'
        onChange={(e) => {
          dispatch(
            setBranch({
              name: e.target.value,
            }),
          );
        }}
      >
        {data ? (
          data.map((branch) => (
            <SelectItem value={branch.name} key={branch.name}>
              {branch.name}
            </SelectItem>
          ))
        ) : (
          <SelectItem key={'main'} value={'main'}></SelectItem>
        )}
      </Select>
    </div>
  );
}
