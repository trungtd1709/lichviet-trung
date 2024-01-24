const { Modal } = require("react-bootstrap");

export const ModalReceiveContact = ({ show, setShow }) => {
  const closeModal = () => {
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={closeModal}
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-send-contact-success"
      centered
    >
      <Modal.Body>
        <div className="thank-kiu">
          Chúng tôi đã nhận được yêu cầu liên hệ của bạn và sẽ liên lạc với bạn
          trong vòng 24h!.
        </div>
        <div className="lh">Cám ơn!</div>
        <button
          data-dismiss="modal"
          aria-label="Close"
          onClick={closeModal}
          type="button"
        >
          Đóng
        </button>
      </Modal.Body>
    </Modal>
  );
};
