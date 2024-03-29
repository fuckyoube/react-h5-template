import { BigNumber } from 'bignumber.js';

/**
 * 加法
 */
export function numberAdd(a: any, b: any) {
  a = BigNumber(a);
  b = BigNumber(b);
  return a.plus(b).toNumber();
}
/**
 * 多数加法
 */
export function multiAdd(...params: any[]) {
  let data = BigNumber(0);
  for (let index = 0; index < params.length; index++) {
    const element = BigNumber(params[index]);
    data = data.plus(element);
  }
  return data.toNumber();
}

/**
 * 减法
 */
export function numberMinus(a: any, b: any) {
  a = BigNumber(a);
  b = BigNumber(b);
  return a.minus(b).toNumber();
}

/**
 * 乘法
 */
export function numberMutiply(a: any, b: any) {
  a = BigNumber(a);
  b = BigNumber(b);
  return a.multipliedBy(b).toNumber();
}

/**
 * 除法
 */
export function numberDevide(a: any, b: any) {
  a = BigNumber(a);
  b = BigNumber(b);
  return a.dividedBy(b).toNumber();
}
/**
 *
 * @param {*} a 数值
 * @param {*} b 位数
 * @returns
 */
export function numbertoFixed(a: any, b: any) {
  a = BigNumber(a);
  return a.toFixed(b);
}
