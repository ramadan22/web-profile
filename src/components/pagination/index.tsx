'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/button';
import {
  SelectDropdown,
  SelectDropdownContent,
  SelectDropdownItem,
  SelectDropdownTrigger,
  SelectDropdownValue,
} from '@/components/select-dropdown';

type PaginationProps = {
  count: number;
  page?: number;
  perPage?: number;
  // className?: string;
  onPageChange?: (page: number) => void;
  onPerPageChange?: (perPage: number) => void;
};

const Pagination = ({
  count,
  page: pageProp = 1,
  perPage: perPageProp = 10,
  onPageChange,
  onPerPageChange,
}: PaginationProps) => {
  const [perPage, setPerPage] = useState(perPageProp);
  const [page, setPage] = useState(pageProp);

  const totalPageCount = Math.ceil(count / perPage);

  useEffect(() => {
    if (onPageChange) {
      onPageChange(page);
    }
  }, [page, onPageChange]);

  useEffect(() => {
    if (onPerPageChange) {
      onPerPageChange(Number(perPage));
    }
  }, [perPage, onPerPageChange]);

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-black/50">
        Total data:
        {' '}
        {!Number.isNaN(count) ? count : 0}
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-black/50">Rows per page</p>
          <SelectDropdown
            value={perPage.toString()}
            onValueChange={(value) => {
              setPage(1);
              setPerPage(value as unknown as number);
            }}
          >
            <SelectDropdownTrigger className="h-8 w-[70px]">
              <SelectDropdownValue placeholder={perPage} />
            </SelectDropdownTrigger>
            <SelectDropdownContent side="top">
              {[2, 5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectDropdownItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectDropdownItem>
              ))}
            </SelectDropdownContent>
          </SelectDropdown>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium text-black/50">
          Page
          {' '}
          {page}
          {' '}
          of
          {' '}
          {!Number.isNaN(totalPageCount) ? totalPageCount : 0}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setPage(1)}
            disabled={page === 1}
          >
            <span className="sr-only">Go to first page</span>
            first
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => page > 1 && setPage((pagePayload) => pagePayload - 1)}
            disabled={page === 1}
          >
            prev
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => page < totalPageCount && setPage((pagePayload) => pagePayload + 1)}
            disabled={page === totalPageCount}
          >
            next
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => page < totalPageCount && setPage(totalPageCount)}
            disabled={page === totalPageCount}
          >
            last
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
