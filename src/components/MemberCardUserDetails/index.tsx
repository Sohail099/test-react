import React from "react";

import Typography from "../Typography";
import RoleIcons from "../RoleIcon";

type UserDetailProps = {
  displayUsername: string;
  email?: string;
  isPending?: boolean;
  isWorkspaceOwner?: boolean;
  isCompanyOwner?: boolean;
  role?: string;
  onClickSendAgain?: () => void;
};

const MemberCardUserDetails = ({
  displayUsername,
  email,
  isCompanyOwner,
  isWorkspaceOwner,
  role
}: UserDetailProps) => {
  return (
    <>
      <Typography type="standard" weight="semibold">
        {displayUsername}
      </Typography>
      <Typography type="sm" customColorClass="text-slate-500">
        {email}
      </Typography>

      {(isCompanyOwner || isWorkspaceOwner || role) && (
        <div className="flex gap-2 items-center">
          <RoleIcons
            role={role}
            isCompanyOwner={isCompanyOwner}
            isWorkspaceOwner={isWorkspaceOwner}
          />
        </div>
      )}
    </>
  );
};
export default MemberCardUserDetails;
