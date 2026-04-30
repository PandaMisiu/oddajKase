import { Link } from "react-router";

type PropTypes = {
  to: string;
  name: string;
};

export default function SideBarLink({ to, name }: PropTypes) {
  return (
    <Link
      to={to}
      className="py-3 rounded-full hover:bg-accent/50 active:bg-accent/80 transition-all cursor-pointer flex items-center justify-center text-sm font-medium"
    >
      {name}
    </Link>
  );
}
