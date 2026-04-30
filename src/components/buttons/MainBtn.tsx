type PropTypes = {
  name: string;
  className?: string;
  onClick?: () => void;
};

export default function MainBtn({ name, className, onClick }: PropTypes) {
  return (
    <button
      onClick={onClick}
      className={`${className} text-text-light py-3 px-4 rounded-full bg-accent hover:bg-accent/80 active:bg-accent/90 transition-all cursor-pointer flex items-center justify-center text-sm font-medium`}
    >
      {name}
    </button>
  );
}
