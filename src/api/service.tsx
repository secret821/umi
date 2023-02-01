import axios from "axios";
const root = process.env.REACT_APP_BASEURL;
console.log(process.env.REACT_APP_BASEURL,'process.env.REACT_APP_BASEURL')

let all = async function () {
  const funcs = [...arguments];
  return new Promise((resolve, reject) => {
    axios
      .all(funcs)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// post请求
let post = async function (url : string, params : any) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      baseURL: root,
      data: params,
      withCredentials: true,
      timeout: 600000,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// get请求
let get = async function (url : string, params : any) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: url,
      baseURL: root,
      withCredentials: true,
      params: params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// put请求
let put = async function (url : string, params : any) {
  return new Promise((resolve, reject) => {
    axios({
      method: "put",
      url: url,
      baseURL: root,
      withCredentials: true,
      data: params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// put请求
let Delete = async function (url : string, params : any) {
  return new Promise((resolve, reject) => {
    axios({
      method: "delete",
      url: url,
      baseURL: root,
      withCredentials: true,
      params: params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const http = { all, post, get, put, Delete};
