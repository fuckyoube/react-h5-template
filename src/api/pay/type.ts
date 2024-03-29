export interface CreatePayRes {
  code: number;
  desc: string;
  extraData: PayResultRes;
  orderId: string;
}

export interface PayResultRes {
  agentDeptId: number;
  appId: number;
  bizOrderId: string;
  codeUrl: string;
  deptId: number;
  forwardPath: string;
  hldPay: boolean;
  jsApiNoncestr: string;
  jsApiPackage: string;
  jsApiPaySign: string;
  jsApiSignType: string;
  jsApiTimestamp: string;
  notifyTime: string;
  openId: string;
  orderId: string;
  payAmt: number;
  paySign: string;
  payStatus: number;
  payTotalAmt: number;
  prepayId: string;
  prepayIdFlag: string;
  redirectUrl: string;
  thirdAppId: string;
  tradeIp: string;
  tradeType: number;
  wxAppId: string;
}
