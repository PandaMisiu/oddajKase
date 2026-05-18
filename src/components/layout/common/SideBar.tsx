import { Link } from "react-router";
import MainBtn from "../../buttons/MainBtn";
import SideBarLink from "../../buttons/SideBarLink";
import SideBarTitle from "../../text/SideBarTitle";

type Props = {
  onAction: () => void;
  actionLabel?: string;
};

export default function SideBar({ onAction, actionLabel = "New Expense" }: Props) {
  return (
    <div className="flex flex-col h-full w-56 bg-brand-darker text-text">
      <SideBarTitle />

      <div className="flex flex-col justify-between flex-1 p-4">
        <div className="flex flex-col gap-y-2">
          <SideBarLink to="/dashboard" name="Dashboard" />
          <SideBarLink to="/groups" name="Groups" />
          <Link
            to="/signup"
            className="mt-4 block rounded-full bg-rose-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-rose-600"
          >
            Logout
          </Link>
        </div>

        <div>
          <MainBtn name={actionLabel} className="w-full" onClick={onAction} />
        </div>
      </div>
    </div>
  );
}
