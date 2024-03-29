/**
 * 判断支付宝、微信支付
 * @returns 支付环境判断
 */
export function getPayEnv(): string {
  const browser = navigator.userAgent.toLowerCase();
  let payEnv = '';
  if ((browser.match(/Alipay/i) as unknown) == 'alipay') {
    payEnv = 'alipay';
  }
  if ((browser.match(/MicroMessenger/i) as unknown) == 'micromessenger') {
    payEnv = 'wx';
  }
  return payEnv;
}

//  截取url中的code方法
export function getUrlCode(): Record<string, string> {
  const url = location.search;
  const theRequest: Record<string, string> = {};
  if (url.indexOf('?') !== -1) {
    const str = url.substr(1);
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
    }
  }
  return theRequest;
}

// 支付宝获取code
export function getQueryParams(): Record<string, string> {
  const result: Record<string, string> = {}; // 存参数得对象
  const urlString = location.href;
  // 利用正则表达式
  const reg = /[?&][^?&]+=[^?&]+/g;
  const found = urlString.match(reg); // 拿到有符合正则得字符串，输出为数组 [ '?name=home', '&age=20' ]
  if (found) {
    found.forEach((item) => {
      const temp = item.substring(1).split('='); // = 分割
      const key = temp[0];
      const value = temp[1];
      result[key] = value;
    });
  }
  return result;
}
/**
 * 防抖一定时间连续触发的事件，只在最后执行一次
 * @param func 执行函数
 * @param wait 等待时间
 * @param immediate 是否立即执行
 * @returns
 */
export function debounce(func: Function, wait: number, immediate: boolean) {
  let timeout: NodeJS.Timeout;

  return function (this: any, ...args: any[]) {
    const context = this;
    if (timeout) clearTimeout(timeout); // timeout 不为null
    if (immediate) {
      const callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * 节流一段时间内只执行一次
 * @param func 执行函数
 * @param delay 延持时间
 * @returns
 */
export function throttled(fn: Function, delay: number) {
  let timer: NodeJS.Timeout | null = null;
  let startTime = Date.now();

  return function (this: any, ...args: any[]) {
    const curTime = Date.now(); // 当前时间
    const remaining = delay - (curTime - startTime); // 从上一次到现在，还剩下多少多余时间
    const context = this;

    clearTimeout(timer);

    if (remaining <= 0) {
      fn.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, remaining);
    }
  };
}
