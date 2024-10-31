"use client";

import { DottedSeparator } from "@/components/dotted-separator";
import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { useGetTask } from "@/features/tasks/api/use-get-task";
import { TaskBreadCrumbs } from "@/features/tasks/components/task-bread-crumbs";
import { TaskDescription } from "@/features/tasks/components/task-description";
import { TaskOverview } from "@/features/tasks/components/task-overview";

interface TaskIdClientProps {
  taskId: string;
}

export const TaskIdClient = ({ taskId }: TaskIdClientProps) => {
  const { data, isLoading } = useGetTask({ taskId });

  if (!data) {
    return <PageLoader />;
  }
  if (isLoading) {
    <PageLoader />;
  }
  return (
    <div className="flex flex-col">
      <TaskBreadCrumbs id={taskId} project={data.project} task={data!} />
      <DottedSeparator className="my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverview task={data} />
        <TaskDescription task={data} />
      </div>
    </div>
  );
};
