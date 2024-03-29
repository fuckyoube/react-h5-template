import { http } from '@/utils/http';
import type { Template } from './type';
import type { MeritList } from '@/api/temple/type';

enum faithAPI {
  FaithPage = '/faith/h5/page/',
  FaithPreView = '/faith/h5/page/preView/',
  FaithDonates = '/faith/h5/page/donates/',
}

// 获取驿宗教捐款页面详细信息
export function getFaithView(projectId: string) {
  return http.request<Template>({
    url: faithAPI.FaithPage + projectId,
    method: 'get'
  });
}

// 获取驿宗教捐款页面详细信息预览
export function getFaithPreView(preProjectId: string) {
  return http.request<Template>({
    url: faithAPI.FaithPreView + preProjectId,
    method: 'get'
  });
}

// 获取功德榜
export function getFaithDonates(projectId: string) {
  return http.request<MeritList>({
    url: faithAPI.FaithDonates + projectId,
    method: 'get'
  });
}

