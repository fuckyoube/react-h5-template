export interface CreateOrderReq {
  blessInfo: BlessInfo;
  donateInfo: DonateInfo;
  payType: number;
  qrCodeEncodeStr: string;
  remark?: string;
  totalAmt: number;
}
interface DonateInfo {
  // donateType: number;
  donateTypeName: string;
  name: string;
  phone: string;
  wishContent: string;
}

interface BlessInfo {
  lanternId: number;
  lanternName: string;
  name: string;
  phone: string;
  time: string;
  timeUnit?: number;
  wishContent: string;
}

export interface OrderPageObj {
  actualAmt: number;
  cert: string;
  createTime: string;
  deptId: number;
  memberId: string;
  orderExt: DonateInfo | BlessInfo;
  orderId: string;
  orderStatus: number;
  payDesc: string;
  payOrderId: string;
  payStatus: number;
  payTime: string;
  payType: number;
  printStatus: number;
  printTime: string;
  projectId: number;
  projectName: string;
  projectType: number;
  refundAmt: number;
  refundDesc: string;
  refundStatus: number;
  refundTime: string;
  remark: string;
  totalAmt: number;
  updateTime: string;
}
