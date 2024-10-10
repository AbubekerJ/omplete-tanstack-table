"use client"

import { Button } from "@/components/ui/button"
import { TableActions } from "./table-actions"
import { ArrowUpDown } from "lucide-react"


export const columns  = [
  {
    accessorKey: 'first_name',
    header: ({column})=>{

      return (
     <Button   className='' onClick={()=>{
       column.toggleSorting(column.getIsSorted()==='asc')
     }}>
      <ArrowUpDown className='mx-3 h-4 w-4'/>
      First Name
     </Button>
      )
    },
  },
  {
    accessorKey: "last_name",
    header: "Last name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date_of_birth",
    header: () => <div className="text-right">Date of Birth</div>,
    cell: ({ row }) => {
      const date_of_birth= parseFloat(row.getValue("date_of_birth"))
      const formatted = new Date(date_of_birth).toLocaleDateString()

 
      return <div className="text-right font-medium">{formatted}</div>
  },},


  {
    id:'actions',
    
    cell:({row})=>{
      const person = row.original

      return <TableActions person={person}/> 
    }
   
  }
]
