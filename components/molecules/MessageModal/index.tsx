import { FC, memo } from "react";
import { MessageModalProps } from "./interface";
import Button from "react-bootstrap/esm/Button";

export const MessageModal: FC<MessageModalProps> = ({
  title,
  content,
  handleClickCancel,
  handleClickConfirm,
}) => {
  return (
    <>
      <div className="text-center">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" onClick={handleClickCancel}>
            Cancel
          </Button>
          <Button
            onClick={handleClickConfirm}
            className="btn btn-custom btn btn-primary"
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(MessageModal);
