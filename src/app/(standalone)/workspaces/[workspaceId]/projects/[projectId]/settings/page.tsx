import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { ProjectIdSettingClient } from "./client";

interface ProjectSettingsPageProps {
  params: {
    projectId: string;
  };
}

const ProjectSettingsPage = async ({ params }: ProjectSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <ProjectIdSettingClient id={params.projectId} />;
};

export default ProjectSettingsPage;
