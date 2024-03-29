import { http } from '@/utils/http';
import type { CreateOrderReq, OrderPageObj } from './type';

enum orderApi {
  CreateOrder = '/faith/h5/pay/createOrder',
  CompletedOrder = '/faith/h5/pay/completedOrder/',
  CancelOrder = '/faith/h5/pay/cancelOrder/',
  OrderPage = '/faith/h5/order/page',
  OrderDetail = '/faith/h5/order/',
}

// 创建订单
export function createOrder(data: CreateOrderReq) {
  return http.request<OrderPageObj>({
    url: orderApi.CreateOrder,
    method: 'post',
    data
  });
}

// 完成订单
export function completedOrder(orderId: string) {
  return http.request({
    url: orderApi.CompletedOrder + orderId,
    method: 'post'
  });
}

// 取消订单
export function cancelOrder(orderId: string) {
  return http.request({
    url: orderApi.CancelOrder + orderId,
    method: 'post'
  });
}

// 查询驿宗教订单流水分页
export function getOrderPage(pageNum: number, pageSize: number, projectId: string, loadingHide: boolean = false) {
  return http.request<OrderPageObj[]>({
    url: `${orderApi.OrderPage}?pageNum=${pageNum}&pageSize=${pageSize}&projectId=${projectId}`,
    method: 'post',
    loadingHide
  });
}

// 获取驿宗教订单流水详细信息
export function getOrderDetail(orderId: string) {
  return http.request<OrderPageObj>({
    url: `${orderApi.OrderDetail}` + orderId,
    method: 'get'
  });
}
