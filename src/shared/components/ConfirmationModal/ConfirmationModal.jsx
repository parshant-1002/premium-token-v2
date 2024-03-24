/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import CustomModal from '../CustomModal/CustomModal';
import './style.scss';

function ConfirmationModal({
  icon,
  open = false,
  title = 'Are you sure?',
  subTitle = '',
  submitButtonText = 'Delete',
  handSubmit,
  handleClose,
  showCancelButton = false,
}) {
  return (
    <CustomModal
      open={open}
      submitButtonText={submitButtonText}
      handSubmit={handSubmit}
      handleClose={handleClose}
      className="confirmation_modal"
      size="sm"
      showCancelButton={showCancelButton}
    >
      <div className="pt-4 text-center">
        {icon
          ? (
            <em className="icon icon-grey">
              <img src={icon || LogoutIcon1} alt="Logout" width="20" height="20" />
            </em>
          ) : null}
        <h5 className="h5">{title}</h5>
        <p>{subTitle}</p>
      </div>
    </CustomModal>
  );
}

export default ConfirmationModal;
