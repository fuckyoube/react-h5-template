// import { showLoadingToast, closeToast } from 'react-vant';

let loadingCount = 0; // 记录当前正在请求的数量
export function startLoading() {
  if (loadingCount === 0) {
    // showLoadingToast({
    //   duration: 0,
    //   forbidClick: true,
    //   message: '加载中...',
    // });
  }
  loadingCount++;
}

export function stopLoading() {
  if (loadingCount <= 0) return;
  loadingCount--;
  if (loadingCount === 0) {
    // closeToast();
  }
}
