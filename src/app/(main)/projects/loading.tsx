import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return <div className="grid grid-cols-1 gap-4 pt-20 h-full">
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[350px] rounded-xl" />
      <Skeleton className="h-4 w-[350px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[350px] rounded-xl" />
      <Skeleton className="h-4 w-[350px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-[125px] w-[350px] rounded-xl" />
      <Skeleton className="h-4 w-[350px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  </div>
}