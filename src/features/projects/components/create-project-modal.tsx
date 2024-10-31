"use client";
import { ResponsiveModal } from "@/components/responsive-modal";

import { CreateProjectForm } from "./create-project-form";
import { useCreateProjectModal } from "../hooks/use-create-project-modal";

export const CreateProjectModal = () => {
  const { setIsOpen, isOpen, close } = useCreateProjectModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResponsiveModal>
  );
};
