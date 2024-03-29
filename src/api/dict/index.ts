import { http } from '@/utils/http';
import type { DictType } from '@/api/dict/type';

enum dictAPI {
  OrderState = '/system/dict/data/type/payfly_order_status',
  PayState = '/system/dict/data/type/sys_trade_status',
  PayChannel = '/system/dict/data/type/payfly_pay_channel'
}

export function getOrderState() {
  return http.request<DictType>({
    url: dictAPI.OrderState,
    method: 'get'
  });
}

export function getPayState() {
  return http.request<DictType>({
    url: dictAPI.PayState,
    method: 'get'
  });
}

export function getPayChannel() {
  return http.request<DictType>({
    url: dictAPI.PayChannel,
    method: 'get'
  });
}
