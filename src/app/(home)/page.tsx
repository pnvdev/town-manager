import Link from "next/link";

import {Button} from "@/components/ui/button";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Town Manager</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {`Streamline your town's operations with our comprehensive management solution. Handle
            permits, manage resources, and serve your community better.`}
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Already have an account?
            <Link className="underline hover:text-primary" href="/login">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Permit Management</h3>
            <p className="text-sm text-muted-foreground">
              Efficiently process and track permits for construction, events, and business
              operations. Register to access our full suite of permit management tools.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Resource Planning</h3>
            <p className="text-sm text-muted-foreground">
              {`Optimize resource allocation and budget management for your town's projects. Create an
              account to start planning effectively.`}
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold">Community Engagement</h3>
            <p className="text-sm text-muted-foreground">
              Keep citizens informed and involved with transparent communication tools. Sign up to
              participate in community discussions and updates.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
