import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { WorkspaceIdSettingClient } from "./client";

const WorkspaceIdSettingsPage = async ({
  params,
}: {
  params: { workspaceId: string };
}) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <WorkspaceIdSettingClient id={params.workspaceId} />;
};

export default WorkspaceIdSettingsPage;
