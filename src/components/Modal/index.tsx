import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { TbChevronLeft, TbX } from "react-icons/tb";

import Typography from "../Typography";
import Button from "../Button";

export type PopupProps = {
  title: string;
  buttonLabel?: string;
  closeLabel?: string;
  backLabel?: string;
  children: React.ReactNode;
  onClickButton?: () => void;
  onClose?: () => void;
  onBack?: () => void;
};

const Modal = ({
  title,
  children,
  closeLabel,
  backLabel,
  onClickButton,
  buttonLabel,
  onClose,
  onBack
}: PopupProps) => {
  const container = document.getElementById("root") as HTMLElement;

  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className="overscroll-none fixed h-screen inset-0 flex items-center justify-center z-50 animate-fade animate-duration-[200ms]">
      <div
        onClick={onClose}
        role="button"
        aria-hidden
        className="absolute hover:cursor-default inset-0 bg-slate-800 opacity-50"
      />
      <div className="relative flex flex-col w-full max-w-screen-sm p-4 md:p-0 animate-fade-down animate-duration-[400ms]">
        <div className="w-full z-50 justify-end flex gap-1.5 mb-1">
          {backLabel && (
            <div
              onClick={onBack}
              role="button"
              aria-hidden
              className="hover:scale-105 transition-all flex items-center bg-slate-800/50 w-fit rounded-md z-50 py-1 pr-3 pl-2"
            >
              <TbChevronLeft className="h-5 w-5 text-white" />
              <Typography type="sm" customColorClass="text-white">
                {backLabel}
              </Typography>
            </div>
          )}
          {closeLabel && (
            <div
              onClick={onClose}
              role="button"
              aria-hidden
              className="hover:scale-105 transition-all flex gap-1 items-center bg-slate-800/50 w-fit rounded-md z-50 py-1 px-3"
            >
              <TbX className="h-4 w-4 text-white" />
              <Typography type="sm" customColorClass="text-white">
                {closeLabel}
              </Typography>
            </div>
          )}
        </div>
        <div className="bg-white shadow-lg rounded-lg z-10 w-full">
          <div className="gap-4 flex items-center p-4 pl-5 justify-between">
            <Typography type="h3" weight="bold">
              {title}
            </Typography>
            {buttonLabel && (
              <Button
                label={buttonLabel}
                onClick={onClickButton}
                color="secondary"
              />
            )}
          </div>
          <div className="bg-slate-100 rounded-b-lg p-5 border-t border-slate-300 h-4/5 max-h-[80vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>,
    container
  );
};

export default Modal;
