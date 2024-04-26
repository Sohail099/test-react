import React, { useState } from "react";

import Divider from "../Divider";
import Typography from "../Typography";
import Button from "../Button";
import Modal from "../Modal";
import CompanyOwnerCard from "../CompanyOwnerCard";
import MemberCard from "../MemberCard";
import MemberCardList from "../MemberCardList";
import WorkspaceOwnerCard from "../WorkspaceOwnerCard";

type WorkspaceMembersManagerProps = {
  workspaceId?: string;
};

export enum Entities {
  WORKSPACE = "WORKSPACE",
  SCREENS = "SCREENS",
  CONTENT = "CONTENT",
  BILLING = "BILLING",
}

const COMPANY_DATA = {
  company: {
    _id: "6481e3d598b3bdea4b7ab0f0",
    name: "COMPANY 1",
    country: "US",
    ownerId: "c-1",
    industry: "PLACES_WORKSHIP",
    createdAt: "2023-06-08T14:21:09.148Z",
    updatedAt: "2023-06-08T14:21:09.148Z",
  },
};

const WORKSPACE_DATA = {
  workspace: {
    _id: "w-1",
    name: "Company WS ",
    isDefault: true,
    language: "en",
    timezone: "UTC",
    ownerId: "o-1",
    companyId: "c-1",
    // members: [
    //   {
    //     id: "m-1",
    //     permissions: [
    //       {
    //         entity: "WORKSPACE",
    //         role: "READ",
    //         _id: "p-1",
    //       },
    //       {
    //         entity: "SCREENS",
    //         role: "READ",
    //         _id: "p-2",
    //       },
    //       {
    //         entity: "CONTENT",
    //         role: "READ",
    //         _id: "p-3",
    //       },
    //       {
    //         entity: "BILLING",
    //         role: "READ",
    //         _id: "p-4",
    //       },
    //     ],
    //     _id: "m-1",
    //   },
    //   {
    //     id: "m-2",
    //     permissions: [
    //       {
    //         entity: "WORKSPACE",
    //         role: "ADMIN",
    //         _id: "p-5",
    //       },
    //       {
    //         entity: "SCREENS",
    //         role: "ADMIN",
    //         _id: "p-6",
    //       },
    //       {
    //         entity: "CONTENT",
    //         role: "ADMIN",
    //         _id: "p-7",
    //       },
    //     ],
    //     _id: "m-2",
    //   },
    // ],
    createdAt: "2023-06-08T14:21:09.187Z",
    updatedAt: "2023-10-28T11:51:43.519Z",
    _owner: {
      _id: "o-1",
      name: "test o",
      email: "testo@test.com",
    },
    _members: [
      {
        _id: "m-1",
        name: "Test 3",
        email: "test3@test.com",
        permissions: [
          {
            entity: "WORKSPACE",
            role: "READ",
            _id: "p-8",
          },
          {
            entity: "SCREENS",
            role: "READ",
            _id: "p-9",
          },
          {
            entity: "CONTENT",
            role: "READ",
            _id: "p-10",
          },
          {
            entity: "BILLING",
            role: "READ",
            _id: "p-11",
          },
        ],
      },
      {
        _id: "6481dba02a2fbebdfd7377c4",
        name: "Test 2",
        email: "test2@test.com",
        permissions: [
          {
            entity: "WORKSPACE",
            role: "ADMIN",
            _id: "p-12",
          },
          {
            entity: "SCREENS",
            role: "ADMIN",
            _id: "p-13",
          },
          {
            entity: "CONTENT",
            role: "ADMIN",
            _id: "p-14",
          },
        ],
      },
    ],
    invitations: [
      {
        _id: "i-1",
        userEmail: "testi1@test.com",
        workspaceId: "w-1",
        permissions: [
          {
            entity: "WORKSPACE",
            role: "ADMIN",
            _id: "p-15",
          },
          {
            entity: "SCREENS",
            role: "ADMIN",
            _id: "p-16",
          },
          {
            entity: "CONTENT",
            role: "ADMIN",
            _id: "p-17",
          },
          {
            entity: "BILLING",
            role: "ADMIN",
            _id: "p-18",
          },
        ],
        token: "t-1",
        expireAt: "2023-06-26T16:15:55.952Z",
        createdAt: "2023-06-26T16:15:55.962Z",
        updatedAt: "2023-06-26T16:15:55.962Z",
      },
    ],
    _companyOwner: {
      id: "m-1",
      name: "test",
      email: "test@test.com",
    },
  },
};

export const getPermissionRole = (
  entity: Entities | undefined,
  permissions: Record<string, string>[] | undefined
) => {
  const permission = permissions?.find(
    (permission) => permission.entity === entity
  );
  const role = permission?.role;

  return role;
};

const WorkspaceMembersManager = ({
  workspaceId,
}: WorkspaceMembersManagerProps) => {
  const [isMemberPopupVisible, setMemberPopupVisible] = useState(false);
  const [isInvitationPopupVisible, setInvitationPopupVisible] = useState(false);
  // const [memberId, setMemberId] = useState("");
  // const [invitationId, setInvitationId] = useState("");

  const { workspace } = WORKSPACE_DATA;
  const workspaceOwner = workspace?._owner;

  const workspaceMembers = workspace?._members;

  const workspaceInvitations = workspace?.invitations;

  const { company } = COMPANY_DATA;

  const companyOwner = workspace?._companyOwner;

  const handleAddMember = () => {
    console.log("handleAddMember");
  };

  const handleMemberPermissionsClick = (memberId: string) => {
    console.log("handleMemberPermissionsClick", memberId);
  };

  const handleMemberDeleteClick = (memberId: string) => {
    console.log("handleMemberDeleteClick", memberId);
    setMemberPopupVisible(true);
  };

  const handleCloseMemberPopup = () => {
    console.log("handleCloseMemberPopup");
    setMemberPopupVisible(false);
  };

  const handleRemoveMember = () => {
    console.log("handleRemoveMember");
    if (!workspaceId) {
      return;
    }

    handleCloseMemberPopup();
  };

  const handleSendAgain = (invitationId: string) => {
    console.log("handleSendAgain", invitationId);

    handleCloseMemberPopup();
  };

  const handleInvitationDeleteClick = (invitationId: string) => {
    console.log("handleInvitationDeleteClick", invitationId);
    // setInvitationId(invitationId);
    setInvitationPopupVisible(true);
  };

  const handleCloseInvitationPopup = () => {
    setInvitationPopupVisible(false);
  };

  const handleRemoveInvitation = () => {
    console.log("handleRemoveInvitation");
    handleCloseInvitationPopup();
  };

  const handleInvitationPermissionsClick = (invitationId: string) => {
    console.log("handleInvitationPermissionsClick", invitationId);
  };

  return (
    <div className="max-w-3xl">
      <Divider height="sm" fullWidth />
      <div className="flex flex-col gap-4">
        <Button
          label="add member"
          fullWidth
          color="primary"
          onClick={handleAddMember}
        />
        {workspaceInvitations &&
          workspaceInvitations.map((invited) => (
            <div key={invited._id}>
              <MemberCard
                id={invited._id}
                username={invited.userEmail}
                email=""
                isPending
                role={getPermissionRole(
                  Entities.WORKSPACE,
                  invited.permissions
                )}
                onClickSendAgain={() => handleSendAgain(invited._id)}
                onClickPermissions={() =>
                  handleInvitationPermissionsClick(invited._id)
                }
                onClickDelete={() => handleInvitationDeleteClick(invited._id)}
              />
              {console.log("I : ", isInvitationPopupVisible)}
              {isInvitationPopupVisible && (
                <Modal
                  title="remove"
                  onClose={handleCloseInvitationPopup}
                  closeLabel="close"
                  children={
                    <>
                      <div className="gap-4 flex flex-col">
                        <Typography type="h4">
                          workSpace.removeInvitationConfirmation
                          <span className="font-bold">{invited.userEmail}</span>
                        </Typography>
                      </div>
                      <div className="flex flex-row gap-4 w-full mt-6">
                        <Button
                          color="white"
                          label="cancel"
                          fullWidth
                          onClick={handleCloseInvitationPopup}
                        />
                        <Button
                          color="alert"
                          label="remove"
                          fullWidth
                          onClick={handleRemoveInvitation}
                        />
                      </div>
                    </>
                  }
                />
              )}
            </div>
          ))}
        <>
          {workspace?.ownerId === company?.ownerId ? (
            <MemberCard
              id={companyOwner?.id ? companyOwner?.id : ""}
              username={companyOwner?.name ? companyOwner.name : ""}
              email={companyOwner?.email ? companyOwner?.email : ""}
              isWorkspaceOwner
              isCompanyOwner
            />
          ) : (
            <>
              <WorkspaceOwnerCard workspaceOwner={workspaceOwner} />
              <CompanyOwnerCard companyOwner={companyOwner} />
            </>
          )}
        </>

        <MemberCardList
          members={workspaceMembers}
          workspace={workspace}
          handleMemberDeleteClick={handleMemberDeleteClick}
          handleMemberPermissionsClick={handleMemberPermissionsClick}
          company={company}
          handleRemoveMember={handleRemoveMember}
          isMemberPopupVisible={isMemberPopupVisible}
          handleCloseMemberPopup={handleCloseMemberPopup}
        />
      </div>
    </div>
  );
};

export default WorkspaceMembersManager;
