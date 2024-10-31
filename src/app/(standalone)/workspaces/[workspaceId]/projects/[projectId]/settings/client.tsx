"use client";

import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";

export const ProjectIdSettingClient = ({ id }: { id: string }) => {
  const { data: initialValues, isLoading } = useGetProject({ projectId: id });

  if (isLoading) {
    return <PageLoader />;
  }
  if (!initialValues) {
    return <PageError message="Project not found!" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValues} />
    </div>
  );
};
