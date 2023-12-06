import { CallApiBackend } from "@/api/apiRequest";
import LoaderData from "@/components/Ui/Loader";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import {CallApiBackend} from "../Ui/CallApiBackend";
// import LoaderData from "../Ui/Loader";
import { Helmet } from "react-helmet";

const BASE_URL_IMAGE = process.env.REACT_APP_BASE_URL_IMAGE;
const Contact = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const SubmitFormContac = (e) => {
    e.preventDefault(e);
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      content: e.target[3].value,
    };
    setLoad(true);
    CallApiBackend(data, "/api/user/contact", "POST", 2).then(
      (res) => {
        if (res.data.status === 1) {
          setmodalIsOpen(true);
        }
        setLoad(false);
      },
      () => {
        setLoad(false);
      }
    );
  };
  const closeModal = () => {
    setmodalIsOpen(false);
    window.location.reload();
  };
  const InputHiddenPlaceholder = (e) => {
    const id = e.target.id;
    if (e.target.value) {
      document.getElementById(id + "-hidden-input").classList.add("d-none");
    } else {
      document.getElementById(id + "-hidden-input").classList.remove("d-none");
    }
  };
  return (
    <>
      <LoaderData size={"big page"} showLoad={load} fixed={true} />
      <Helmet>
        <title>Lịch Việt | Liên hệ</title>
      </Helmet>
      <div className="container">
        <div className="position-relative" id="about-us">
          <div className="row">
            <div className="col-md-6 col-sm-12 ">
              <h2 className="title-banner tb">Liên hệ</h2>
              <p className=" style-text4 mt-4">
                Bạn vui lòng để lại tin nhắn, nhân viên của PPCLINK sẽ liên hệ
                hỗ trợ bạn trong thời gian sớm nhất.
              </p>
            </div>
            <div className="col-md-6 col-12 ml-auto">
              <img
                width="506"
                height="305"
                style={{ width: "100%" }}
                src={
                  "https://ppclink.com/wp-content/uploads/2021/12/banner_lienhe.png"
                }
                className="image wp-image-366  attachment-full size-full"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="backgroup-banner" />
        </div>

        <div className="form-recruitment div-card mt-4">
          <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <form action="#" onSubmit={SubmitFormContac}>
                <h5 className="name-column tb mb-4">Nhập thông tin liên hệ</h5>
                <div className="form-group">
                  <label htmlFor="name" className="placeholder-input">
                    <i className="far fa-user" />
                    <p className="text-placeholder" id={"name-hidden-input"}>
                      Họ tên <span className="text-red">*</span>
                    </p>
                  </label>
                  <input
                    onChange={InputHiddenPlaceholder}
                    type="text"
                    name="name"
                    id="name"
                    className="input-edit"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="placeholder-input">
                    <i className="far fa-envelope" />
                    <p className="text-placeholder" id={"email-hidden-input"}>
                      Email <span className="text-red">*</span>
                    </p>
                  </label>
                  <input
                    onChange={InputHiddenPlaceholder}
                    type="email"
                    name="email"
                    id="email"
                    className="input-edit"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="placeholder-input">
                    <i className="fas fa-phone-alt" />
                    <p className="text-placeholder" id={"phone-hidden-input"}>
                      Số điện thoại <span className="text-red">*</span>
                    </p>
                  </label>
                  <input
                    onChange={InputHiddenPlaceholder}
                    type="text"
                    name="phone"
                    id="phone"
                    className="input-edit"
                    required
                  />
                </div>
                <div className="form-group text-area content">
                  <label htmlFor="note" className="placeholder-input ">
                    <i className="far fa-clipboard" />
                    <p className="text-placeholder" id={"note-hidden-input"}>
                      Nhập nội dung <span className="text-red">*</span>
                    </p>
                  </label>
                  <textarea
                    onChange={InputHiddenPlaceholder}
                    id="note"
                    name="introduce"
                    className="input-edit"
                    required
                  />
                </div>
                <div className="mt-md-5 sb-contact">
                  <Button
                    type="submit"
                    className="submit-form"
                    style={{
                      width: 200,
                      backgroundColor: "#35c03c",
                      borderColor: "#35c03c",
                    }}
                    value=""
                  >
                    Gửi
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-sm-12 col-md-6 ">
              <div className="name-column" />
              <div className="address-cty mt-3">
                <h5 className="style-text3 tb mb-4">
                  Công ty cổ phần phát triển Lịch Việt
                </h5>
                <a
                  className="style-text4"
                  rel="noreferrer"
                  target={"_blank"}
                  href={"https://goo.gl/maps/ccHcu6TWPexqEuqF9"}
                >
                  Số 10, ngõ 379 đường Hoàng Hoa Thám, phường Liễu Giai, quận Ba
                  Đình, thành phố Hà Nội
                </a>
                <div className="textwidget" />
                <div className="row w-100 mt-4 phone-email">
                  <div className="widget col-md-5 col-6">
                    <p className="style-text4 mb-1">Số điện thoại</p>
                    <a
                      href={"tel:0766002689"}
                      rel="noreferrer"
                      className={"style-text4 tb"}
                      target={"_blank"}
                    >
                      0766.002.689
                    </a>
                  </div>
                  <div className="widget col-md-5 col-6">
                    <p className="style-text4 mb-1">E-mail</p>
                    <a
                      href="mailto:lichviet@ppclink.com"
                      rel="noreferrer"
                      className={"style-text4 tb"}
                      target={"_blank"}
                    >
                      lichviet@ppclink.com
                    </a>
                  </div>
                </div>
                <div className={"mt-1"}>
                  <iframe
                    title={"google-map"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.768188775474!2d105.813565215314!3d21.041959392702665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9ad2d30a19%3A0xab5f6a6ff3152bb4!2zMTAgTmcuIDIgUC4gUXXhuqduIE5n4buxYSwgTmfhu41jIEjhu5MsIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1678164653526!5m2!1svi!2s"
                    height="300"
                    style={{ border: "0", width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="thank-kiu">
            Chúng tôi đã nhận được liên hệ của bạn.
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
    </>
  );
};
export default Contact;