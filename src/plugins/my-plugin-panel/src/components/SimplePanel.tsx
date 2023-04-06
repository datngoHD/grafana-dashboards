import React, { useEffect, useMemo, useState } from 'react';
import { PanelProps } from '@grafana/data';
import { Container } from '@grafana/ui';
import { SimpleOptions, User, UserApiResponse } from '../types';
import MaterialReactTable, {
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
  type MRT_SortingState,
} from 'material-react-table';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = (props: Props) => {
  const { options } = props;
  const [users, setUsers] = useState<User[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!users.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      const url = new URL('/api/users?', 'https://reqres.in');
      url.searchParams.set('start', `${pagination.pageIndex * pagination.pageSize}`);
      url.searchParams.set('per_page', `${pagination.pageSize}`);
      url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      url.searchParams.set('globalFilter', globalFilter ?? '');
      url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

      try {
        const response = await fetch(url.href);
        const json = (await response.json()) as UserApiResponse;
        setUsers(json.data);
        setRowCount(json.meta.totalRowCount);
      } catch (error) {
        setIsError(true);
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnFilters, globalFilter, pagination.pageIndex, pagination.pageSize, sorting]);

  const columns = useMemo<Array<MRT_ColumnDef<User>>>(
    () => [
      {
        accessorKey: 'avatar',
        header: 'Avatar',
        enableColumnActions: false,
        enableColumnFilter: false,
        Cell: ({ cell }) => (
          <img
            style={{ height: 36, borderRadius: '50%' }}
            src={cell.getValue<string>()}
            alt={cell.getValue<string>()}
          />
        ),
      },
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnActions: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        enableColumnActions: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'first_name',
        header: 'First Name',
        enableColumnActions: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'last_name',
        header: 'Last Name',
        enableColumnActions: false,
        enableColumnFilter: false,
      },
    ],
    []
  );
  const columnsNotAvatar = useMemo<Array<MRT_ColumnDef<User>>>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnActions: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        enableColumnActions: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'first_name',
        header: 'First Name',
        enableColumnActions: false,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'last_name',
        header: 'Last Name',
        enableColumnActions: false,
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <Container>
      <MaterialReactTable
        columns={options.showAvatar ? columns : columnsNotAvatar}
        data={users}
        enableRowSelection
        getRowId={(row) => row.email}
        initialState={{ showColumnFilters: true }}
        manualFiltering
        manualPagination
        manualSorting
        muiToolbarAlertBannerProps={
          isError
            ? {
                color: 'error',
                children: 'Error loading data',
              }
            : undefined
        }
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        rowCount={rowCount}
        state={{
          columnFilters,
          globalFilter,
          isLoading,
          pagination,
          showAlertBanner: isError,
          showProgressBars: isRefetching,
          sorting,
        }}
      />
    </Container>
  );
};
