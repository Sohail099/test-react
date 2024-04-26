import React from "react";

import { IMember } from "../MemberCardList";

import Typography from "../Typography";
import Button from "../Button";
import Modal from "../Modal";

type MemberModal = {
  handleCloseMemberPopup?: () => void;
  handleRemoveMember?: () => void;
  member: IMember;
};

const MemberModal = ({
  handleCloseMemberPopup,
  handleRemoveMember,
  member
}: MemberModal) => {
  return (
    <Modal
      title={"workSpace.removeInvitation"}
      onClose={handleCloseMemberPopup}
      closeLabel={"common.close"}
      children={
        <>
          <div className="gap-4 flex flex-col">
            <Typography type="h4">
              {"workSpace.removeInvitationConfirmation"}
              <span className="font-bold">{member.userEmail}</span>
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
  );
};

export default MemberModal;
