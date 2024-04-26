import React from "react";

import { TbKey, TbTrash } from "react-icons/tb";

import Typography from "../Typography";

type ActionButtonsProps = {
  onClickPermissions?: () => void;
  onClickDelete?: () => void;
};

const MemberCardActionButtons = ({
  onClickPermissions,
  onClickDelete
}: ActionButtonsProps) => {
  return (
    <>
      {onClickPermissions && (
        <div
          onClick={onClickPermissions}
          onKeyUp={onClickPermissions}
          role="button"
          aria-hidden
          className="flex sm:flex-col flex-row sm:w-[80px] w-full sm:h-[80px] h-[40px] sm:py-0 py-2 bg-slate-100 items-center rounded-lg place-content-center gap-2"
        >
          <TbKey className="text-slate-600 w-6 h-6 sm:w-7 sm:h-7" />
          <Typography type="xs" customColorClass="text-slate-500">
            permissions
          </Typography>
        </div>
      )}
      {onClickDelete && (
        <div
          onClick={onClickDelete}
          onKeyUp={onClickDelete}
          role="button"
          aria-hidden
          className="flex sm:flex-col flex-row sm:w-[80px] w-full sm:h-[80px] h-[40px] sm:py-0 py-2 bg-slate-100 items-center rounded-lg place-content-center gap-2"
        >
          <TbTrash className="text-rose-500 w-6 h-6 sm:w-7 sm:h-7" />
          <Typography type="xs" customColorClass="text-rose-500">
            remove
          </Typography>
        </div>
      )}
    </>
  );
};

export default MemberCardActionButtons;
