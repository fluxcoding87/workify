"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center gap-y-4 justify-center flex-col">
      <AlertTriangle className="size-6" />
      <p className="text-sm">Something went wrong!</p>
      <Button variant="secondary" size="sm" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
