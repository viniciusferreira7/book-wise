import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonYourBooks() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-sm text-gray-200">Há 2 dias</h2>
        <Skeleton className="h-56 w-full rounded-lg border-transparent bg-gray-900 p-6 px-5" />
        <Skeleton className="h-56 w-full rounded-lg border-transparent bg-gray-900 p-6 px-5" />
        <Skeleton className="h-56 w-full rounded-lg border-transparent bg-gray-900 p-6 px-5" />
      </div>
    </div>
  )
}
