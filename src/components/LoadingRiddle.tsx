
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingRiddle = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-20" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Skeleton className="h-24 w-full rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center space-x-4">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </CardFooter>
    </Card>
  );
};

export default LoadingRiddle;
