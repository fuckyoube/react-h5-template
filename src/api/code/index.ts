import { http } from '@/utils/http';
import type {
  LoginReq,
  LoginRes,
  ParseQRCodeRes,
  PreLoginReq,
  PreLoginRes,
} from './type';

enum codeAPI {
  PreLogin = '/auth/h5/preLogin',
  Login = '/auth/h5/login',
  ParseQRCode = '/payfly/h5/codePlate/parse/',
}

// H5用户预登录
export function preLogin(data: PreLoginReq) {
  return http.request<PreLoginRes>({
    url: codeAPI.PreLogin,
    method: 'post',
    data: data,
  });
}

// H5用户登录
export function login(data: LoginReq) {
  return http.request<LoginRes>({
    url: codeAPI.Login,
    method: 'post',
    data: data,
  });
}

// 解析码牌
export function parseQRCode(encodeStr: string) {
  return http.request<ParseQRCodeRes>({
    url: codeAPI.ParseQRCode + encodeStr,
    method: 'get',
  });
}

// 唤起交易
export function h5Pay(orderId: string) {
  return http.request({
    url: `/payfly/h5/pay/${orderId}`,
    method: 'post',
  });
}

// 取消支付
export function cancelPay(orderId: string) {
  return http.request({
    url: `/payfly/h5/pay/cancel/${orderId}`,
    method: 'post',
  });
}

// 完成订单
export function completedOrder(orderId: string) {
  return http.request({
    url: `/payfly/h5/pay/completedOrder/${orderId}`,
    method: 'post',
  });
}
