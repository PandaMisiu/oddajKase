import type { MouseEvent, ReactNode } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
};

export default function Modal({
  open,
  title,
  onClose,
  children,
  footer,
}: ModalProps) {
  if (!open) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="flex flex-col w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[32px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
        onClick={handleContentClick}
      >
        {/* Header — never scrolls */}
        <div className="shrink-0 flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-slate-500 transition hover:text-slate-900 cursor-pointer"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 min-h-0">
          {children}
        </div>

        {/* Footer — never scrolls */}
        {footer && (
          <div className="shrink-0 border-t border-slate-200 bg-white px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
