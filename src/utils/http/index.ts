import Axios, {
  type AxiosInstance,
  type AxiosError,
  type AxiosResponse,
  type AxiosRequestConfig,
} from 'axios';
import { ContentTypeEnum, ResultEnum } from '@/enums/requestEnum';
import { startLoading, stopLoading } from './loading';
// import NProgress from '../progress';
import { Toast } from 'react-vant';
import { storage } from '../storage';
import type { Response } from './types';
// import { useLoginStore } from '@/store';
import router from '@/router';
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  loadingHide?: any;
}
// 默认 axios 实例请求配置
const configDefault: any = {
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
  timeout: 0,
  baseURL: import.meta.env.VITE_BASE_API,
  data: {},
};

class Http {
  // 当前实例
  private static axiosInstance: AxiosInstance;
  // 请求配置
  private static axiosConfigDefault: CustomAxiosRequestConfig;

  // 请求拦截
  private httpInterceptorsRequest(): void {
    Http.axiosInstance.interceptors.request.use(
      (config: any) => {
        // NProgress.start();
        // 有的请求隐藏loading
        if (!config.loadingHide) startLoading();
        // 接口token白名单
        const whitelist = ['/auth/h5/login', '/auth/h5/preLogin'];
        // 发送请求前，可在此携带 token
        const token = storage.getItem('token') || '6254438191653273600';
        // const token = JSON.parse(storage.getItem('user')).token;
        if (token) {
          if (!whitelist.includes(config.url)) {
            config.headers['appSession'] = token;
          }
        }
        config.headers['client-type'] = import.meta.env.VITE_CLIENT_TYPE;
        config.headers['polarday-version'] =
          import.meta.env.VITE_APP_POLARDAY_VERSION;
        return config;
      },
      (error: AxiosError) => {
        Toast(error.message);
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<Response>) => {
        // NProgress.done();
        stopLoading();
        // 与后端协定的返回字段
        const { code, msg, data } = response.data;
        // 判断请求是否成功
        const isSuccess =
          Reflect.has(response.data, 'code') && code === ResultEnum.SUCCESS;
        if (isSuccess) {
          return data;
        } else {
          // 处理请求错误
          Toast(msg);
          return Promise.reject(response.data);
        }
      },
      (error: AxiosError) => {
        // NProgress.done();
        // 有的请求需要隐藏loading
        stopLoading();
        // 处理 HTTP 网络错误
        let message = '';
        // HTTP 状态码
        const status = error.response?.status;
        // const loginStore = useLoginStore();
        switch (status) {
          case 400:
            message = '请求错误';
            break;
          case 401:
            storage.removeItem('token');
            // loginStore.$reset();
            // router.replace({
            //   path: '/index',
            //   query: {
            //     codePlate: storage.getItem('codePlate') || '',
            //     regId: storage.getItem('regId') || '',
            //   },
            // });
            message = '未授权，请登录';
            break;
          case 403:
            message = '拒绝访问';
            break;
          case 404:
            message = `请求地址出错: ${error.response?.config?.url}`;
            break;
          case 408:
            message = '请求超时';
            break;
          case 500:
            message = '服务器内部错误';
            break;
          case 501:
            message = '服务未实现';
            break;
          case 502:
            message = '网关错误';
            break;
          case 503:
            message = '服务不可用';
            break;
          case 504:
            message = '网关超时';
            break;
          case 505:
            message = 'HTTP版本不受支持';
            break;
          default:
            message = '网络连接故障';
        }

        Toast(message);
        return Promise.reject(error);
      }
    );
  }

  constructor(config: CustomAxiosRequestConfig) {
    Http.axiosConfigDefault = config;
    Http.axiosInstance = Axios.create(config);
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  // 通用请求函数
  public request<T>(paramConfig: CustomAxiosRequestConfig): Promise<T> {
    const config = { ...Http.axiosConfigDefault, ...paramConfig };
    return new Promise((resolve, reject) => {
      Http.axiosInstance
        .request(config)
        .then((response: any) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export const http = new Http(configDefault);
