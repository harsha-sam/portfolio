import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-20">
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
  
}