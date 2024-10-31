import { Loader } from "lucide-react";

const DashboardLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default DashboardLoading;
