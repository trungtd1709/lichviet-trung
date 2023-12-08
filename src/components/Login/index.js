import { useCallback, useContext, useEffect, useState } from "react";
import AppleLogin from "react-apple-login";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import QRCode from "react-qr-code";
import LoaderData from "../Ui/Loader";
import Popup from "../Ui/Popup";
import { FormForgotPassword } from "./Form/FormForgotPassword";
import { FormLogin } from "./Form/FormLogin";
// import {useSearchParams} from "react-router-dom";
import { CallApiBackend } from "@/api/apiRequest";
import { AuthContext } from "@/context/authContext";
import MetaHead from "../MetaHead";
import { imgSrc } from "@/const/AppResource";

const BASE_URL_IMAGE = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
const ZALO_APP_ID = process.env.NEXT_PUBLIC_ZALO_APP_ID;
const ZALO_CALLBACK_URL = process.env.NEXT_PUBLIC_ZALO_CALLBACK_URL;
const APPLE_CLIENT_ID = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID;
const APPLE_CALLBACK_URL = process.env.NEXT_PUBLIC_APPLE_CALLBACK_URL;
const randomString = (length = 10) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
const Login = () => {
  // const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const { updateUserData, userData } = useContext(AuthContext);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const handleToggle = () => {
    setIsForgotPassword(!isForgotPassword);
  };
  const handleClosePopup = () => {
    setPopup({
      ...popup,
      isOpen: false,
    });
  };
  // const [searchParams] = useSearchParams();

  const [loadLogin, setLoad] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    username: null,
    password: null,
  });
  const [isTime, setTime] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [tokenQr, setTokenQr] = useState("");
  const [codeVerifier, setCodeVerifier] = useState(randomString(43));
  const [popup, setPopup] = useState({
    checkLogin: false,
    isOpen: false,
    message: "",
    handleClose: handleClosePopup,
  });
  const setTimes = () => {
    if (isTime > 0) {
      setTime(isTime - 1);
    }
  };
  useEffect(() => {
    const timer = setInterval(setTimes, 1000);
    return () => clearTimeout(timer);
  });
  useCallback(() => {
    if (userData) {
      window.location.href = "/";
    }
  }, [userData]);
  useCallback(loginByQrCode, [updateUserData]);

  function loginByQrCode() {
    CallApiBackend({}, "/api/auth/get-login-qr-code", "POST", 2).then(function (
      response
    ) {
      if (response.data.data) {
        setTokenQr(response.data.data);
        setTime(60);
        CallApiBackend(
          { token: response.data.data },
          "/api/auth/scan-qr-code",
          "POST",
          2
        ).then(function (response) {
          if (Number(response.data.status) === 1) {
            updateUserData(response.data.data);
            redirectLogin();
          }
        });
      }
    });
  }

  const setDataInput = (e) => {
    if (e.target.name === "username") {
      setDataLogin({ username: e.target.value, password: dataLogin.password });
    }
    if (e.target.name === "password") {
      setDataLogin({ username: dataLogin.username, password: e.target.value });
    }
  };
  const submitLogin = (e) => {
    e.preventDefault(e);
    console.log(dataLogin);
    if (!dataLogin.username || !dataLogin.password) {
      alert("Bạn chưa nhập số điện thoại hoặc mật khẩu!");
    } else {
      setLoad(true);
      CallApiBackend(dataLogin, "/api/user/login", "POST", 2).then(
        function (response) {
          setLoad(false);
          if (Number(response.data.status) === 1) {
            updateUserData(response.data.data);
            debugger;
            setPopup({
              ...popup,
              checkLogin: true,
              message: "Đăng nhập thành công! Bạn sẽ tự động chuyển hướng.",
              isOpen: true,
              handleClose: redirectLogin,
              time: true,
            });
          } else {
            setPopup({
              ...popup,
              checkLogin: false,
              message: "Tài khoản hoặc mật khẩu không đúng!",
              isOpen: true,
            });
          }
        },
        function () {
          setLoad(false);
          setPopup({
            ...popup,
            checkLogin: false,
            message: "Có lỗi xảy ra vui lòng thử lại sau!",
            isOpen: true,
          });
        }
      );
    }
  };
  const redirectLogin = () => {
    var linkRedirect = window.localStorage.getItem("link_redirect");
    if (linkRedirect) {
      window.localStorage.removeItem("link_redirect");
      window.location.href = linkRedirect;
    } else {
      window.location.href = "/";
    }
  };
  // const fbLogin = () => {
  //     window.FB.login(function (response) {
  //         if (response.authResponse) {
  //             var access_token = window.FB.getAuthResponse()['accessToken'];
  //             getFbUserData(access_token);
  //         } else {
  //             document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
  //         }
  //     }, {scope: 'email'});
  // }
  const zaloLogin = async () => {
    CallApiBackend({}, "/api/get-challenge-zalo", "POST").then(function (req) {
      debugger;
      if (req.data.status === 1) {
        window.localStorage.setItem(
          "code_challenge",
          req.data.data.code_challenge
        );
        window.localStorage.setItem(
          "code_verifier",
          req.data.data.code_verifier
        );
        let url =
          "https://oauth.zaloapp.com/v4/permission?app_id=" +
          ZALO_APP_ID +
          "&redirect_uri=" +
          ZALO_CALLBACK_URL +
          "&code_challenge=" +
          req.data.data.code_challenge +
          "&state=" +
          Date.now();
        window.location.href = url;
      }
    });
  };

  function getFbUserData(access_token) {
    window.FB.api(
      "/me",
      {
        locale: "en_US",
        fields: "id,first_name,last_name,email,link,gender,locale,picture",
      },
      function (response) {
        let data = {
          signal: "facebook_" + response.id,
          accessToken: access_token,
          type: 2,
        };
        setLoad(true);
        CallApiBackend(data, "/api/user/loginbysignal", "POST", 2)
          .then(function (response) {
            setLoad(false);
            if (Number(response.data.status) !== 0) {
              updateUserData(response.data.data);
              setPopup({
                ...popup,
                checkLogin: true,
                message:
                  "Đăng nhập thành công! Bạn sẽ được chuyển hướng sau 3s.",
                isOpen: true,
                handleClose: redirectLogin,
                time: true,
              });
            } else {
              setPopup({
                ...popup,
                checkLogin: false,
                message: "Đăng nhập không thành công. Vui lòng thử lại sau!",
                isOpen: true,
              });
            }
          })
          .catch(function (error) {
            setLoad(false);
          });
      }
    );
  }

  const responseGoogle = (response) => {
    // console.log(response)
    if (response?.profileObj?.email) {
      let data = {
        signal: response.profileObj.email,
        idToken: response.tokenId,
        type: 1,
      };
      setLoad(true);
      CallApiBackend(data, "/api/user/loginbysignal_v2", "POST", 2).then(
        function (response) {
          setLoad(false);
          if (Number(response.data.status) !== 0) {
            updateUserData(response.data.data);
            setPopup({
              ...popup,
              checkLogin: true,
              message: "Đăng nhập thành công! Bạn sẽ được chuyển hướng sau 3s.",
              isOpen: true,
              handleClose: redirectLogin,
              time: true,
            });
          } else {
            setPopup({
              ...popup,
              checkLogin: false,
              message: "Đăng nhập không thành công. Vui lòng thử lại sau!",
              isOpen: true,
            });
          }
        },
        function (error) {
          setLoad(false);
          console.log(error);
        }
      );
    }
  };

  const responseApple = (response) => {};
  return (
    <Container>
      <MetaHead title="Lịch Việt | Đăng nhập" />
      <LoaderData size={"big"} showLoad={loadLogin} fixed={true} />
      <div className={"text-center tl-mobile title-1 py-4"}>
        {" "}
        Đăng nhập Lịch Việt
      </div>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 type-login"
      >
        <Tab eventKey="home" title="Đăng nhập nhanh">
          <div className={"d-flex justify-content-center tab-item"}>
            <div className={"item-login"}>Mở app để quét QR code</div>
            <div className={"item-login"}>
              {/* <img src={qr} className={isTime == 0 ? 'qr-lock' : ''} alt="" width={150} /> */}
              <div className={isTime === 0 ? "qr-lock" : ""}>
                <QRCode value={tokenQr} />
              </div>
            </div>
            <div
              className={
                isTime === 0 ? "d-block item-login" : "d-none item-login"
              }
            >
              <p className={"error-qr-code text-center"}>Mã QR hết hạn</p>
              <Button className={"reload-qr-code"} onClick={loginByQrCode}>
                {" "}
                Lấy mã mới
              </Button>
            </div>
            <div className={"item-login or-login"}>
              <p className={"line-login"}></p>
              <p className={"m-0"}>Hoặc đăng nhập qua</p>
              <p className={"line-login"}></p>
            </div>
            <Row className={"w-100 justify-content-center"}>
              <Col md={4} className={"zindex"}>
                {/*<div onClick={fbLogin} style={{userSelect: "none"}}*/}
                {/*     className={"item-login login-with google"}>*/}
                {/*    <div className={'d-flex'}>*/}
                {/*        <img src={BASE_URL_IMAGE + "/images/icon/login-fb.png"}*/}
                {/*             alt="" width={20}/>*/}
                {/*        <p>Đăng nhập bằng Facebook</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <GoogleLogin
                  clientId={GOOGLE_CLIENT_ID}
                  render={(renderProps) => (
                    <div
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className={"item-login login-with google"}
                    >
                      <div className={"d-flex login-button"}>
                        {/* <img
                          src={BASE_URL_IMAGE + "/images/icon/login-google.png"}
                          alt=""
                          width={18}
                        /> */}
                        <p>Đăng nhập bằng Google</p>
                      </div>
                    </div>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <div
                  onClick={zaloLogin}
                  style={{ userSelect: "none" }}
                  className={"item-login login-with google"}
                >
                  <div className={"d-flex login-button"}>
                    {/* <img
                      src={BASE_URL_IMAGE + "/images/icon/icon_zalo.png"}
                      alt=""
                      width={18}
                    /> */}
                    <p>Đăng nhập bằng Zalo</p>
                  </div>
                </div>
                <AppleLogin
                  clientId={APPLE_CLIENT_ID}
                  redirectURI={encodeURI(APPLE_CALLBACK_URL)}
                  responseMode={"fragment"}
                  responseType={"code id_token"}
                  render={(renderProps) => (
                    <div
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className={"item-login login-with google"}
                    >
                      <div className={"d-flex login-button"}>
                        {/* <img
                          src={BASE_URL_IMAGE + "/images/icon/apple.png"}
                          alt=""
                          width={18}
                        /> */}
                        <p>Đăng nhập bằng Apple</p>
                      </div>
                    </div>
                  )}
                />
                <AppleLogin
                  clientId={APPLE_CLIENT_ID}
                  redirectURI={encodeURI(APPLE_CALLBACK_URL)}
                  responseMode={"fragment"}
                  responseType={"code id_token"}
                  render={(renderProps) => (
                    <div
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className={"item-login login-with google"}
                    >
                      <div className={"d-flex login-button"}>
                        {/* <i
                          className="fab fa-facebook login-button-icon"
                          style={{ color: "#3B5998" }}
                        ></i> */}
                        <p>Đăng nhập bằng Facebook</p>
                      </div>
                    </div>
                  )}
                />
              </Col>
              <Col
                md={9}
                className={" mx-auto d-flex justify-content-between img-active"}
              >
                <img
                  // src={BASE_URL_IMAGE + "/images/icon/login2.png"}
                  src={imgSrc.boyLoginImg}
                  alt=""
                  width={250}
                  className={"img-scale-down hidden-xs"}
                />
                <img
                  // src={BASE_URL_IMAGE + "/images/icon/login2.png"}
                  src={imgSrc.girlLoginImg}
                  alt=""
                  width={250}
                  className={"img-scale-down hidden-xs"}
                />
                <img
                  src={BASE_URL_IMAGE + "/images/icon/login-mb.png"}
                  alt=""
                  className={"img-scale-down hidden-md"}
                />
              </Col>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Đăng nhập bằng mật khẩu">
          <form action="" onSubmit={submitLogin}>
            <div className={"d-flex justify-content-center tab-item mt-4"}>
              <Col md={3}>
                {isForgotPassword ? (
                  <FormForgotPassword
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    setDataInput={setDataInput}
                  />
                ) : (
                  <FormLogin
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    setDataInput={setDataInput}
                  />
                )}
              </Col>
              <Row className={"w-100 justify-content-center login-password"}>
                <Col md={4} className={"zindex"}>
                  <div className={"item-login login-with "}>
                    <Button type="submit" className={"px-4 py-2"}>
                      Đăng nhập
                    </Button>
                  </div>
                  <div className={"text-reset-password"}>
                    <p onClick={handleToggle}>
                      {isForgotPassword ? "Quay lại" : "Quên mật khẩu"}
                    </p>
                  </div>
                </Col>
                <Col
                  md={9}
                  className={
                    " mx-auto d-flex justify-content-between img-active"
                  }
                >
                  <img
                    // src={BASE_URL_IMAGE + "/images/icon/login1.png"}
                    src={imgSrc.boyLoginImg}
                    alt=""
                    width={250}
                    className={"img-scale-down hidden-xs"}
                  />
                  <img
                    // src={BASE_URL_IMAGE + "/images/icon/login2.png"}
                    src={imgSrc.girlLoginImg}
                    alt=""
                    width={250}
                    className={"img-scale-down hidden-xs"}
                  />
                  <img
                    src={BASE_URL_IMAGE + "/images/icon/login-mb.png"}
                    alt=""
                    className={"img-scale-down hidden-md"}
                  />
                </Col>
              </Row>
            </div>
          </form>
        </Tab>
      </Tabs>
      <Popup
        show={popup.isOpen}
        handleClose={popup.handleClose}
        text={popup.message}
        imgClose={true}
        button={true}
        success={popup.checkLogin}
        time={popup.time}
      />
    </Container>
  );
};

export default Login;
