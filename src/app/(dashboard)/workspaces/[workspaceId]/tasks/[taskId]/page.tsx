import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { TaskIdClient } from "./client";

const TaskIdPage = async ({ params }: { params: { taskId: string } }) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <TaskIdClient taskId={params.taskId} />;
};

export default TaskIdPage;
