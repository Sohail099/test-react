import React from "react";

import {
  TbCircleKey,
  TbCrown,
  TbEyeglass,
  TbForbid2,
  TbPencil,
  TbStar
} from "react-icons/tb";

import Typography from "../Typography";

type RoleIconsProps = {
  isWorkspaceOwner?: boolean;
  isCompanyOwner?: boolean;
  role?: string;
};

const RoleIcons = ({
  isCompanyOwner,
  isWorkspaceOwner,
  role
}: RoleIconsProps) => {
  const permissions = [
    {
      permission: isCompanyOwner,
      icon: <TbCrown className="w-5 h-5 text-slate-600" />,
      label: "permissions.COMPANY_OWNER"
    },
    {
      permission: isWorkspaceOwner && !isCompanyOwner,
      icon: <TbStar className="w-5 h-5 text-slate-600" />,
      label: "permissions.WORKSPACE_OWNER"
    },
    {
      permission: role === "ADMIN" && !isCompanyOwner && !isWorkspaceOwner,
      icon: <TbCircleKey className="w-5 h-5 text-slate-600" />,
      label: "permissions.ADMIN"
    },
    {
      permission: role === "WRITE" && !isCompanyOwner && !isWorkspaceOwner,
      icon: <TbPencil className="w-5 h-5 text-slate-600" />,
      label: "permissions.WRITE"
    },
    {
      permission: role === "READ" && !isCompanyOwner && !isWorkspaceOwner,
      icon: <TbEyeglass className="w-5 h-5 text-slate-600" />,
      label: "permissions.READ"
    },
    {
      permission: role === "NONE" && !isCompanyOwner && !isWorkspaceOwner,
      icon: <TbForbid2 className="w-5 h-5 text-slate-600" />,
      label: "permissions.NONE"
    }
  ];

  const permissionElement = permissions.find(({ permission }) => permission);

  if (permissionElement) {
    return (
      <div className="flex gap-2 items-center">
        {permissionElement.icon}
        <Typography type="sm" customColorClass="text-slate-600">
          {permissionElement.label}
        </Typography>
      </div>
    );
  }

  return null;
};

export default RoleIcons;
