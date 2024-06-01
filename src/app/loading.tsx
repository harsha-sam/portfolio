import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return <div className="flex justify-center h-screen items-center gap-10">
    <Skeleton className="h-[200px] w-[300px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
}