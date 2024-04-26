import clsx from "clsx";
import React from "react";
import { TbMail, TbUser } from "react-icons/tb";

import IconAvatar from "../IconAvatar";
import Typography from "../Typography";
import Button from "../Button";
import MemberCardUserDetails from "../MemberCardUserDetails";
import MemberCardActionButtons from "../MemberCardActionButtons";

enum Roles {
  ADMIN = "ADMIN",
  WRITE = "WRITE",
  READ = "READ",
  NONE = "NONE"
}

export type MemberCardProps = {
  id?: string;
  username: string;
  email?: string;
  isPending?: boolean;
  isWorkspaceOwner?: boolean;
  isCompanyOwner?: boolean;
  role?: string;
  onClickPermissions?: () => void;
  onClickSendAgain?: () => void;
  onClickDelete?: () => void;
};

const MemberCard = ({
  id,
  username,
  email,
  isPending = false,
  onClickPermissions,
  onClickSendAgain,
  onClickDelete,
  isWorkspaceOwner = false,
  isCompanyOwner = false,
  role
}: MemberCardProps) => {
  const nameParts = username.split(" ");
  const firstName = nameParts[0];
  let initials = "";

  if (nameParts.length > 1) {
    const lastName = nameParts[1];
    initials = `${lastName.charAt(0)}.`;
  }

  const displayUsername = `${firstName} ${initials}`;

  const canEdit = [Roles.ADMIN, Roles.WRITE].includes(role as Roles);

  return (
    <div
      id={id}
      className={clsx(
        "rounded-lg shadow-bottom-sm shadow-slate-300",
        isPending ? "bg-slate-200" : "bg-white"
      )}
    >
      <div className="flex sm:items-center items-start gap-4 sm:p-2 p-5 w-full">
        <div className="w-16 h-[71px]">
          <IconAvatar Icon={TbUser} IconType="round" size="oval" />
        </div>
        <div className="flex-col sm:flex-row flex w-full h-full">
          <div className="flex flex-col w-full self-stretch justify-start items-start">
            <MemberCardUserDetails
              role={role}
              isWorkspaceOwner={isWorkspaceOwner}
              isCompanyOwner={isCompanyOwner}
              email={email}
              displayUsername={displayUsername}
              isPending={isPending}
              onClickSendAgain={onClickSendAgain}
            />
            {isPending && (
              <div className="flex sm:gap-2 gap-1 mt-1.5 items-center">
                <TbMail className="w-5 h-5 text-slate-600" />
                <Typography type="sm" customColorClass="text-slate-600">
                  invitation
                </Typography>
                {onClickSendAgain && (
                  <Button
                    padding="md"
                    label="send again"
                    color="secondary"
                    onClick={onClickSendAgain}
                  />
                )}
              </div>
            )}
          </div>
          <div className="sm:flex gap-2 w-full justify-end hidden">
            {canEdit && (
              <MemberCardActionButtons
                onClickDelete={onClickDelete}
                onClickPermissions={onClickPermissions}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2 pb-2 px-2 justify-evenly sm:hidden -mt-2">
        {canEdit && (
          <MemberCardActionButtons
            onClickDelete={onClickDelete}
            onClickPermissions={onClickPermissions}
          />
        )}
      </div>
    </div>
  );
};

export default MemberCard;
