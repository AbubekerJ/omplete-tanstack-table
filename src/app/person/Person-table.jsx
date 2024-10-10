'use client';

import { columns } from '@/app/person/column';
import { DataTable } from './data-table';
import { useGetAllPerson } from './query';
import {SkeletonLoading} from '@/app/person/loading-skeleton'

export default function PersonTable() {
  const { data, isLoading, isError } = useGetAllPerson();

  if (isLoading) {
    return <SkeletonLoading/>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  return (
    <div className="container mx-auto py-20">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
