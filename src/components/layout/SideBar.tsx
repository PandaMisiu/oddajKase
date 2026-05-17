import MainBtn from "../buttons/MainBtn";
import SideBarLink from "../buttons/SideBarLink";
import SideBarTitle from "../text/SideBarTitle";

export default function SideBar() {
  return (
    <div className="flex flex-col h-full w-56 bg-brand-darker text-text">
      <SideBarTitle />

      <div className="flex flex-col justify-between flex-1 p-4">
        <div className="flex flex-col gap-y-2">
          <SideBarLink to="/dashboard" name="Dashboard" />
          <SideBarLink to="/groups" name="Groups" />
        </div>

        <div>
          <MainBtn name="New Expense" className="w-full" />
        </div>
      </div>
    </div>
  );
}
