import React from "react";

import MemberCard from "../MemberCard";

export interface IWorkspaceOwner {
  _id?: string;
  name?: string;
  email?: string;
}

type WorkspaceOwnerCardProps = {
  workspaceOwner?: IWorkspaceOwner;
};

const WorkspaceOwnerCard = ({ workspaceOwner }: WorkspaceOwnerCardProps) => {
  return (
    <MemberCard
      id={workspaceOwner?._id ? workspaceOwner?._id : ""}
      username={workspaceOwner?.name ? workspaceOwner.name : ""}
      email={workspaceOwner?.email ? workspaceOwner?.email : ""}
      isWorkspaceOwner
    />
  );
};

export default WorkspaceOwnerCard;
