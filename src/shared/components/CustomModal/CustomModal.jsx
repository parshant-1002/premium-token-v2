import React from 'react';
import { Modal } from 'react-bootstrap';
import './modal.scss';

const CustomModal = ({ title = '', show = false, onClose = () => { }, children = '', size = "lg", ...props }) => {
  return (
    <Modal onHide={onClose} show={show} size={size} centered backdrop="static" >
      <div className="modal-body p-0" {...props}>
        {title ? <div className='modal-header'>
          <h4 className="modal-title h4">{title} </h4>
        </div> : null}
        <button className="close_btn" onClick={onClose}>
          <svg
            id="close"
            xmlns="http://www.w3.org/2000/svg"
            width="10.569"
            height="10.569"
            viewBox="0 0 10.569 10.569"
          >
            <g id="Group_8836" data-name="Group 8836">
              <path
                id="Path_14400"
                data-name="Path 14400"
                d="M10.569,1.068,9.5,0,5.285,4.216,1.068,0,0,1.068,4.216,5.285,0,9.5l1.068,1.068L5.285,6.353,9.5,10.569,10.569,9.5,6.353,5.285Z"
                fill="#fff"
              />
            </g>
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
