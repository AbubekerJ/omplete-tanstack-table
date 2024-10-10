'use client'


import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useDeletePerson } from "./query";
import { queryClient } from "@/utils/all-provider";

export function TableActions({ person }) {
  const { mutate: deletePerson } = useDeletePerson();

  const handleDelete = (id) => {
    deletePerson(id, {
     
      onSuccess: (personId) => {
        queryClient.invalidateQueries('person');
        console.log(`Person with ID ${personId} deleted successfully`);
      },
      onError: (error) => {
        if (error.response?.status === 404) {
          console.error('Error deleting person: Person not found');
        } else {
          console.error('Error deleting person:', error);
        }
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-2 cursor-pointer'>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDelete(person.id)}
          className='p-2 cursor-pointer'
        >
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem className='p-2 cursor-pointer'>
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(person.id.toString());
          }}
          className='p-2 cursor-pointer'
        >
          Copy Person name
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
