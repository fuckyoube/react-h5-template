import { http } from '@/utils/http';
import type { CreatePayRes, PayResultRes } from './type';

enum PayApi {
  CreatePay = '/faith/h5/pay/',
  QueryPayResult = '/faith/h5/pay/queryResult/',
  CancelPay = '/faith/h5/pay/cancel/',
}

// 创建支付
export function h5Pay(orderId: string) {
  return http.request<CreatePayRes>({
    url: PayApi.CreatePay + orderId,
    method: 'post'
  });
}

// 取消支付
export function cancelPay(orderId: string) {
  return http.request({
    url: PayApi.CancelPay + orderId,
    method: 'post'
  });
}

// 支付结果查询
export function queryPayResult(orderId: string) {
  return http.request<PayResultRes>({
    url: PayApi.QueryPayResult + orderId,
    method: 'get'
  });
}
