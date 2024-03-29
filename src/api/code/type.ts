export interface LoginReq {
  appId: number;
  code: string;
  deptId: string;
  loginWay: number;
  thirdLoginAppId: string;
}

export interface LoginRes {
  accessToken: string;
}

export interface ParseQRCodeRes {
  codePlate: {
    appType: string;
    cpId: number;
    cpName: string;
    cpState: number;
    cpUrl: string;
    decorateJson: string;
    endDate: string;
    startDate: string;
    orderButton: string;
    version: string;
  };
  lifecycle: string;
}

export interface PreLoginReq {
  appType: number;
  qrCodeEncodeStr: string;
}

export interface PreLoginRes {
  thirdLoginAppId: string;
  qrCodeDecodeStr: string[];
  deptId: string;
}
