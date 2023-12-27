import CustomersTable from '@/app/ui/customers/table';
import { CustomersTableType } from '@/app/lib/definitions';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return <CustomersTable customers={customers} />;
}
