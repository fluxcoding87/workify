"use client";
import { RiAddCircleFill } from "react-icons/ri";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { WorkSpaceAvatar } from "@/features/workspaces/components/workspace-avatar";
import { useRouter } from "next/navigation";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useCreateWorkspaceModal } from "@/features/workspaces/hooks/use-create-workspace-modal";
export const WorkspaceSwitcher = () => {
  const { open } = useCreateWorkspaceModal();

  const workspaceId = useWorkspaceId();
  const { data: workspaces } = useGetWorkspaces();
  const router = useRouter();
  const onSelect = (id: string) => {
    router.push(`/workspaces/${id}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <RiAddCircleFill
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
          onClick={open}
        />
      </div>
      <div>
        <Select onValueChange={onSelect} value={workspaceId}>
          <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
            <SelectValue placeholder="No workspace selected"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            {workspaces?.documents.map((item) => (
              <SelectItem value={item.$id} key={item.$id}>
                <div className="flex justify-start items-center gap-3 font-medium">
                  <WorkSpaceAvatar name={item?.name} image={item?.imageUrl} />
                  <span className="truncate">{item.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
