import axios from 'axios';

// 正经用法
export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  });

  // 2. axios 的拦截器
  // 请求拦截
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      // console.log(err);
    }
  );

  instance.interceptors.response.use(
    res => {
      // console.log(res);
      return res.data;
    },
    err => {
      // console.log(err);
      // return err;
    }
  );

  // 发送真正的网络请求
  return instance(config);
}
