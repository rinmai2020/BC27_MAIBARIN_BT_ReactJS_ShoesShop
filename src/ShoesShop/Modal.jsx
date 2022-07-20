import React from "react";

const Modal = ({ isOpen, onClose, product }) => {
  const showModal = {
    display: isOpen ? "block" : "none",
  };

  let { name, image, alias, price, description, shortDescription } = product;
  return (
    <>
      <div style={showModal} className="modal fade show" tabIndex={-1}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-warning">
              <h5 className="modal-title text-white fw-bold ">{name}</h5>
              <button type="button" className="btn-close " onClick={onClose} />
            </div>
            <div className="modal-body">
              <img src={image} alt={alias} width="100%" height="300px" />
              <div className="row mb-4">
                <div className="col-md-3 fw-bold">Price:</div>
                <div className="col-md-9">$ {price}</div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3 fw-bold">Description:</div>
                <div className="col-md-9">{description}</div>
              </div>
              <div className="row">
                <div className="col-md-3 fw-bold">Short Description:</div>
                <div className="col-md-9">{shortDescription}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default Modal;
