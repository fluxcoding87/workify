import { getCurrent } from "@/features/auth/queries";

import { redirect } from "next/navigation";
import { ProjectIdClient } from "./client";

const ProjectIdPage = async ({ params }: { params: { projectId: string } }) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <ProjectIdClient id={params.projectId} />;
};

export default ProjectIdPage;
