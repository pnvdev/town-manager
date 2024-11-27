import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Town Manager
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Streamline your town's operations with our comprehensive management solution. Handle permits, manage resources, and serve your community better.
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
            Already have an account? <Link href="/login" className="underline hover:text-primary">Sign in</Link>
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Permit Management</h3>
            <p className="text-sm text-muted-foreground">Efficiently process and track permits for construction, events, and business operations. Register to access our full suite of permit management tools.</p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Resource Planning</h3>
            <p className="text-sm text-muted-foreground">Optimize resource allocation and budget management for your town's projects. Create an account to start planning effectively.</p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Community Engagement</h3>
            <p className="text-sm text-muted-foreground">Keep citizens informed and involved with transparent communication tools. Sign up to participate in community discussions and updates.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
