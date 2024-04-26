import React from "react";

import { getPermissionRole, Entities } from "../WorkspaceMembersManager";

import Typography from "../Typography";
import Button from "../Button";
import Modal from "../Modal";
import MemberCard from "../MemberCard";
import MemberModal from "../MemberModal";

export interface IMember {
  _id: string;
  name?: string;
  email?: string;
  userEmail?: string;
  permissions?: Record<string, string>[];
}

export interface IWorkspace {
  name?: string;
  ownerId?: string;
}

export interface ICompany {
  ownerId?: string;
}

type MemberCardListProps = {
  members?: IMember[];
  handleMemberPermissionsClick: (memberId: string) => void;
  handleMemberDeleteClick: (memberId: string) => void;
  workspace?: IWorkspace;
  company?: ICompany;
  isMemberPopupVisible: boolean;
  handleCloseMemberPopup?: () => void;
  handleRemoveMember?: () => void;
};

const MemberCardList = ({
  members,
  handleMemberPermissionsClick,
  handleMemberDeleteClick,
  workspace,
  company,
  isMemberPopupVisible,
  handleCloseMemberPopup,
  handleRemoveMember
}: MemberCardListProps) => {
  return (
    <div>
      {members
        ?.filter(
          (member) =>
            member._id !== workspace?.ownerId && member._id !== company?.ownerId
        )
        ?.map((member) => (
          <div key={member._id}>
            <MemberCard
              id={member._id}
              username={member.name ? member.name : ""}
              email={member.email}
              onClickPermissions={() =>
                handleMemberPermissionsClick(member._id)
              }
              onClickDelete={() => handleMemberDeleteClick(member._id)}
              isWorkspaceOwner={member._id === workspace?.ownerId}
              isCompanyOwner={member._id === company?.ownerId}
              role={
                member.permissions &&
                getPermissionRole(Entities.WORKSPACE, member?.permissions)
              }
            />
            {isMemberPopupVisible && (
              <Modal
                title={"workSpace.removeMember"}
                onClose={handleCloseMemberPopup}
                closeLabel={"common.close"}
                children={
                  <>
                    <div className="gap-4 flex flex-col">
                      <Typography type="h4">
                        {"workSpace.removeMemberConfirmation_one"}
                        <span className="font-bold">{member.name}</span>
                        <span> ({member.email})</span>
                        {"workSpace.removeMemberConfirmation_two"}
                        <span className="font-bold">{workspace?.name}</span>
                        {"workSpace.removeMemberConfirmation_three"}
                      </Typography>
                    </div>
                    <div className="flex flex-row gap-4 w-full mt-6">
                      <Button
                        color="white"
                        label={"common.cancel"}
                        fullWidth
                        onClick={handleCloseMemberPopup}
                      />
                      <Button
                        color="alert"
                        label={"common.remove"}
                        fullWidth
                        onClick={handleRemoveMember}
                      />
                    </div>
                  </>
                }
              />
            )}
            {isMemberPopupVisible && (
              <MemberModal
                handleCloseMemberPopup={handleCloseMemberPopup}
                handleRemoveMember={handleRemoveMember}
                member={member}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default MemberCardList;
