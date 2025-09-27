import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, UserIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
      <div className="text-center space-y-4">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <UserIcon className="h-12 w-12 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Driver Not Found
          </h1>
          <p className="text-muted-foreground max-w-md">
            The driver you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard/drivers">
            <Button>
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Drivers
            </Button>
          </Link>
          <Link href="/dashboard/drivers/create-new">
            <Button variant="outline">Create New Driver</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
