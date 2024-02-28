import { appVersion } from "@/const/const";
import axios from "axios";
import { isEmpty } from "lodash";
import qs from "qs";

function makeid(length) {
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
}

export const CallApiBackend = async (
  data,
  url,
  method,
  type = 1,
  retryCount = 0
) => {
  // retry count là số lần gọi api
  const BASE_URL = process.env.NEXT_PUBLIC_URL_API;
  let userLocal = JSON.parse(localStorage.getItem("user")) ?? {};
  const { token_login } = userLocal;
  data.token_login = token_login;

  let device_id = localStorage.getItem("device_id");
  if (!device_id) {
    device_id = makeid(40);
    localStorage.setItem("device_id", device_id);
  }
  let headers = {
    // apikey: "TCwrU5V2DBQtfa8pgNkTUgN6FGNsAkQA8181Suf2uNU1A3OeQa",
    accept: "application/json",
    device_id: device_id,
    app_version: appVersion,
  };
  let formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  let params = "";
  if (method.toUpperCase() === "GET") {
    params = "?";
    for (const [key, value] of Object.entries(data)) {
      params += key + "=" + value + "&";
    }
    params = params.slice(0, -1);
  }

  try {
    const response = await axios({
      method: method,
      headers: headers,
      url: BASE_URL + url + params,
      data: formData,
    });
    console.log("[response]:", response);
    if (response?.data?.status === -2 && retryCount < 1) {
      await refreshExpriedToken();
      const newResponse = await CallApiBackend(
        data,
        url,
        method,
        type,
        retryCount + 1
      );
      return newResponse;
      alert("Phiên đăng nhập hết hạn");
    }
    return response;
  } catch (error) {
    console.log("[error]:", error);
    if (error?.response?.status === 401) {
      localStorage.removeItem("user");
      let mess = "Vui lòng đăng nhập để sử dụng chức năng này!";
      if (window.confirm(mess)) {
        window.location.href = "/login";
      } else {
        window.location.reload();
      }
    }
  }
};

export const CallApi = (url, headers, data, method) => {
  let formData;
  if (headers["Content-Type"] == "application/x-www-form-urlencoded") {
    formData = qs.stringify(data);
  } else {
    formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
  }
  console.log(formData);
  const out = axios({
    method: method,
    headers: headers,
    url: url,
    data: formData,
  });
  out.catch(function (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem("user");
      let mess = "Vui lòng đăng nhập để sử dụng chức năng này!";
      if (window.confirm(mess)) {
        window.location.href = "/login";
      } else {
        window.location.reload();
      }
    }
  });
  return out;
};

export const CallApiServerSide = (data, url, method, type = 1) => {
  const BASE_URL = process.env.NEXT_PUBLIC_URL_API;

  let headers = {
    apikey: "TCwrU5V2DBQtfa8pgNkTUgN6FGNsAkQA8181Suf2uNU1A3OeQa",
    accept: "application/json",
    // "device-id": "12312webjfhbwejhfb",
  };

  let params = "";
  if (method.toUpperCase() === "GET") {
    params = "?";
    for (const [key, value] of Object.entries(data)) {
      params += key + "=" + value + "&";
    }
    params = params.slice(0, -1);
  }
  const out = axios({
    method: method,
    headers: headers,
    url: BASE_URL + url + params,
    // data: formData,
  });
  out.catch(function (error) {
    console.log("[Error Call API Server Side]:", error);
    if (error?.response?.status === 401) {
      localStorage.removeItem("user");
      let mess = "Vui lòng đăng nhập để sử dụng chức năng này!";
      if (window.confirm(mess)) {
        window.location.href = "/login";
      } else {
        window.location.reload();
      }
    }
  });
  return out;
};

export const getTopPosts = async () => {
  const res = await CallApiServerSide(
    {},
    "/blog/get-posts?home_page=1&slug_category=nhieu-nguoi-doc",
    "GET"
  );
  if (res?.data?.status === 1) {
    const topPosts = [res.data.data.hot].concat(res.data.data.list).slice(0, 4);
    return topPosts;
  } else {
    return [];
  }
};

export const getBanners = async () => {
  const res = await CallApiServerSide({}, "/get-banners", "GET");
  if (res?.data?.status === 1) {
    const banners = res.data.data;
    return banners;
  } else {
    return [];
  }
};

export const getTuViPosts = async (category) => {
  const res = await CallApiServerSide(
    {},
    "/blog/get-posts?home_page=1&slug_category=" + category,
    "GET"
  );
  if (res?.data?.status === 1) {
    const tuViPosts = res.data.data;
    return tuViPosts;
  } else {
    return [];
  }
};

export const getPostDetail = async (slug_post) => {
  const res = await CallApiServerSide(
    {
      slug_post,
    },
    "/blog/get-detail-post",
    "GET"
  );
  if (res?.data?.status === 1) {
    const postData = res.data.data;
    return postData;
  } else {
    return [];
  }
};

const makePostRequestBodyRaw = async (params, url) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL_API;
  const fullUrl = baseUrl + url;
  try {
    const response = await axios.post(fullUrl, params);
    console.log("Response:", response.data);
    if (response?.data?.status == 1) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// export const getTSHTopics = async (params) => {
//   const url = "/json/tsh/get-topics";
//   const res = await makePostRequestBodyRaw(params, url);
//   if (res) {
//     return res?.data;
//   } else {
//     return [];
//   }
// };

// export const getTSHDetail = async (params) => {
//   const url = "/json/tsh/get-detail";
//   const res = await makePostRequestBodyRaw(params, url);
//   if (res) {
//     return res?.data;
//   } else {
//     return [];
//   }
// };

export const getTSHTopics = async (params) => {
  const url = "/json/tsh/get-topics";
  const res = await CallApiBackend(params, url, "POST", 1);
  if (res?.data?.status == 1) {
    return res.data.data;
  } else {
    return [];
  }
};

export const getTSHDetail = async (params) => {
  const url = "/json/tsh/get-detail";
  const res = await CallApiBackend(params, url, "POST");
  if (res?.data?.status == 1) {
    return res.data.data;
  } else {
    return [];
  }
};

export const getWeatherApi = async () => {
  const url = "/json/weather";
  let params = {
    cityName: ["Auto"],
    deviceType: 1,
  };

  const res = await makePostRequestBodyRaw(params, url);
  if (res) {
    return res?.data;
  } else {
    return {};
  }
};

export const fetchServicesList = async () => {
  const res = await CallApiBackend(
    { platform: "3" },
    "/services/list",
    "POST",
    1
  );
  console.log("[res]:", res.data.status === 1);
  if (res?.data?.status === 1) {
    console.log(res.data.data);
    return res.data.data;
  } else {
    return [];
  }
};

export const fetchUserDetail = async ({ token_login }) => {
  const res = await CallApiBackend({ token_login }, "/user/detail", "POST");
  if (res?.data?.status === 1) {
    console.log(res.data.data);
    return res.data.data;
  } else {
    return {};
  }
};

export const postPremiumAddOrder = async ({ phone }) => {
  const content = "Cần hỗ trợ đăng ký dịch vụ trên web";
  const url = "/premium/addorder";
  const params = { phone, content, features_id: 9 };
  const res = await CallApiBackend(params, url, "POST");
  if (res?.data?.status == 1) {
    return res.data;
  } else {
    return null;
  }
};

// export const postPremiumAddOrder = async ({ phone }) => {
//   const res = await makePostRequestBodyRaw(
//     { phone, content: "Cần hỗ trợ đăng ký dịch vụ trên web", features_id: 9 },
//     "/premium/addorder"
//   );
//   return res;
// };

export const createPaymentTransaction = ({ premiumTypeId, router }) => {
  let userLocal = JSON.parse(localStorage.getItem("user"));
  if (isEmpty(userLocal)) {
    window.localStorage.setItem("link_redirect", "/mua-goi");
    router.push("/login");
  } else {
    if (premiumTypeId) {
      CallApiBackend(
        { premium_type_id: premiumTypeId, channel: "onepay" },
        "/payment/create_transaction",
        "POST",
        true
      ).then(function (response) {
        if (response.data.status == 1) {
          localStorage.setItem("premiumTypeId", premiumTypeId);
          window.location.href = response.data.data;
        } else {
          alert(response.data?.message ?? response.data?.msg);
        }
      });
    }
  }
};

export const refreshExpriedToken = async () => {
  let userLocal = JSON.parse(localStorage.getItem("user"));
  const refreshToken = userLocal.refresh_token;
  const res = await CallApiBackend(
    { refreshToken },
    "/user/refreshsession",
    "POST"
  );
  console.log("[refreshExpriedTokenResponse]:", res);
  if (res?.data?.status === 1) {
    const data = res?.data?.data;
    const newTokenLogin = data?.token_login;
    const newPremiums = data?.premiums; // danh sách các gói pro

    userLocal.token_login = newTokenLogin;
    userLocal.premiums = newPremiums;

    localStorage.setItem("user", JSON.stringify(userLocal));
    // cập nhật thông tin mới vào local storage

    return res.data.data;
  } else {
    return {};
  }
};
