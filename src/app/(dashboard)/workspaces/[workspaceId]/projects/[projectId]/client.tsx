"use client";

import { Analytics } from "@/components/analytics";
import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { Button } from "@/components/ui/button";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { useGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";
import { PencilIcon } from "lucide-react";
import Link from "next/link";

export const ProjectIdClient = ({ id }: { id: string }) => {
  const { data: initialValues, isLoading: isLoadingProject } = useGetProject({
    projectId: id,
  });
  const { data: analytics, isLoading: isLoadingAnalytics } =
    useGetProjectAnalytics({ projectId: id });

  const isLoading = isLoadingAnalytics || isLoadingProject;

  if (isLoading) {
    return <PageLoader />;
  }
  if (!initialValues) {
    return <PageError message="Project not found!" />;
  }
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={initialValues?.name}
            image={initialValues.imageUrl}
            className="size-8"
          />
          <p className="text-lg font-semibold">{initialValues.name}</p>
        </div>
        <div>
          <Button variant="secondary" size="sm" asChild>
            <Link
              href={`/workspaces/${initialValues.workspaceId}/projects/${initialValues.$id}/settings`}
            >
              <PencilIcon className="size-4 mr-2" />
              Edit Project
            </Link>
          </Button>
        </div>
      </div>
      {analytics ? <Analytics data={analytics} /> : null}

      <TaskViewSwitcher hideProjectFilter />
    </div>
  );
};
