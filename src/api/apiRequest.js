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

export const CallApiBackend = (data, url, method, type = 1, baseUrl) => {
  const BASE_URL = baseUrl ?? process.env.NEXT_PUBLIC_URL_API;
  // const BASE_URL = "http://next.lichviet.org";

  // console.log("[BASE_URL]:", BASE_URL);
  let device_id = localStorage.getItem("device_id");
  if (!device_id) {
    device_id = makeid(40);
    localStorage.setItem("device_id", device_id);
  }
  let headers = {
    apikey: "TCwrU5V2DBQtfa8pgNkTUgN6FGNsAkQA8181Suf2uNU1A3OeQa",
    accept: "application/json",
    "device-id": device_id,
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
  const out = axios({
    method: method,
    headers: headers,
    url: BASE_URL + url + params,
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
  // const BASE_URL = "http://next.lichviet.org";

  // console.log("[BASE_URL]:", BASE_URL);
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
    "/api/blog/get-posts?home_page=1&slug_category=nhieu-nguoi-doc",
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
  const res = await CallApiServerSide({}, "/api/get-banners", "GET");
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
    "/api/blog/get-posts?home_page=1&slug_category=" + category,
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
    "/api/blog/get-detail-post",
    "GET"
  );
  if (res?.data?.status === 1) {
    const postData = res.data.data;
    return postData;
  } else {
    return [];
  }
};

const makePostRequest = async (params, url) => {
  const baseUrl = "http://test.api.lichviet.org";
  const fullUrl = baseUrl + url;
  try {
    const response = await axios.post(fullUrl, params);
    console.log("Response:", response.data);
    return response;
    // Handle response here
  } catch (error) {
    console.error("Error:", error);
    alert(error);
    // Handle error here
  }
};

export const getTSHTopics = async (params) => {
  const url = "/json/tsh/get-topics";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: "Nguyễn Văn Quý",
    birthday: "25/01/1995",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://test.api.lichviet.org/json/tsh/get-topics", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  
};

// export async function getTest() {
//   try {
//     const rs = await axios.post(
//       'http://test.api.lichviet.org/json/tsh/get-topics',
//       {
//         name: 'Nguyễn Văn Quý',
//         birthday: '22/01/1995',
//       },
//     );
//     console.log(JSON.stringify(rs.data, null, 2));
//   } catch (error) {
//     console.log(error, message);
//   }
// }

let data = JSON.stringify({
  name: "Nguyễn Văn Quý",
  birthday: "25/01/1995",
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://test.api.lichviet.org/json/tsh/get-topics",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

export async function makeRequest() {
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}
