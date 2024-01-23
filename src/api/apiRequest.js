import { appVersion } from "@/const/const";
import axios from "axios";
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

export const CallApiBackend = async (data, url, method, type = 1) => {
  const BASE_URL = process.env.NEXT_PUBLIC_URL_API;
  // const BASE_URL = "http://next.lichviet.org";

  // console.log("[BASE_URL]:", BASE_URL);
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
    if (response?.data?.status === -2) {
      alert("Phiên đăng nhập hết hạn");
    }
    return response;
  } catch (error) {
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

export const getUserDetail = async (login_token) => {
  const res = await CallApiServerSide({ login_token }, "/user/detail", "GET");
  if (res?.data?.status === 1) {
    const userDetail = res.data.data;
    return userDetail;
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

export const refreshExpriedToken = async ({ refreshToken }) => {
  const res = await CallApiBackend(
    { refreshToken },
    "/user/refreshsession",
    "POST"
  );
  console.log("[res]:", res);
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
