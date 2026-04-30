import SideBar from "../components/layout/SideBar";
import TopBar from "../components/layout/TopBar";

export default function DashboardPage() {
  return (
    <div className="flex h-dvh">
      <SideBar />
      <div className="flex-1 bg-brand">
        <TopBar />
        <div className="p-2">DASHBOARD</div>
      </div>
    </div>
  );
}
