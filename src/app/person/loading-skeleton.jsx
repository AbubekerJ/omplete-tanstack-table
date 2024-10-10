import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonLoading() {
  return (
    <div className="container mx-auto py-20 flex flex-col gap-4 ">
      <div className='flex gap-4'>
      <Skeleton className="h-10 w-[250px]" />
      <Skeleton className="h-10 w-[250px]" />
      </div>
      
      <div className="space-y-2 flex gap-2 w-full">
        <Skeleton className="h-[50vh] w-1/3" />
        <Skeleton className="h-[50vh] w-1/3" />
        <Skeleton className="h-[50vh] w-1/3" />
        <Skeleton className="h-[50vh] w-1/3" />
        
        
      </div>
    </div>
  )
}
