import SideBar from "../components/layout/SideBar";
import TopBar from "../components/layout/TopBar";

export default function GroupPage() {
  return (
    <div className="flex h-dvh">
      <SideBar />
      <div className="flex-1 bg-brand">
        <TopBar />
        <div className="p-2">GROUPS</div>
      </div>
    </div>
  );
}
