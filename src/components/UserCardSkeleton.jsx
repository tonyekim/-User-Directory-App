
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Skeleton from "./ui/skeleton";

const UserCardSkeleton = () => (
  <Card className="border-0 bg-white dark:bg-gray-900 overflow-hidden relative animate-pulse">

    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite] dark:via-gray-700/10" />

    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" 
         style={{ padding: '1px', borderRadius: '12px' }}>
      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[11px]" />
    </div>
    
    <div className="relative z-10">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">

          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 p-1 animate-pulse">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-3 flex-1">
      
            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-md w-4/5 animate-pulse" />
            <div className="h-4 bg-gradient-to-r from-gray-150 via-gray-250 to-gray-150 dark:from-gray-750 dark:via-gray-650 dark:to-gray-750 rounded-md w-3/5 animate-pulse" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center space-x-2">

          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 animate-pulse" />
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-md w-1/2 animate-pulse" />
        </div>
      </CardContent>
    </div>
    

    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-50 blur-xl animate-pulse -z-10" />
  </Card>
);

export default UserCardSkeleton;