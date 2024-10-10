"use client"

import {

  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"


import {useState} from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExportToExcel } from "@/app/person/xlsx"




export function DataTable({
  columns,
  data,
}) {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [columnFilters, setColumnFilters] =useState(
    []
  )
  const [columnSort , setColumnSort]=useState([])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange:setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    onColumnOrderChange:setColumnSort,
    
    
    onPaginationChange: setPagination,
     state:{
      pagination,
      columnFilters,
      columnSort,
     }
  })

  const currentPageData = table.getRowModel().rows.map(row => row.original)


  
  return (

     
    <div>
      
      <div>
        <div className='my-2 flex gap-4'>
      {/* input */}
      <Input placeholder='Filter by  '  className='w-[20%]' value={table.getColumn('first_name')?.getFilterValue() ||''}
      onChange={(e)=>table.getColumn('first_name').setFilterValue(e.target.value)}
      />
       <ThemeToggle/>
       <ExportToExcel jsonData={currentPageData}/>
        </div>
  


      </div>
      {/* table */}
        <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows?.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>

    {/* pagination */}

    <div className={'items-start my-4 flex gap-4' }>
        <Button
         variant='ghost'
         onClick={() => table.previousPage()}
         disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
        variant='ghost'
         onClick={() => table.nextPage()}
         disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
    </div>
    </div>
  
  )
}
