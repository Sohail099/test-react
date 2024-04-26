import React from "react";

import MemberCard from "../MemberCard";

export interface ICompanyOwner {
  _id?: string;
  name?: string;
  email?: string;
}

type CompanyOwnerProps = {
  companyOwner?: ICompanyOwner;
};

const CompanyOwnerCard = ({ companyOwner }: CompanyOwnerProps) => {
  return (
    <MemberCard
      id={companyOwner?._id ? companyOwner?._id : ""}
      username={companyOwner?.name ? companyOwner.name : ""}
      email={companyOwner?.email ? companyOwner?.email : ""}
      isCompanyOwner
    />
  );
};

export default CompanyOwnerCard;
