// 公共类型
export interface Template {
  templateName: string;
  templateSkin: number;
  templateList: string[];
  templateContent: TemplateContent;
  renId?: number;
  codePlateUrl: string;
  createBy: string;
  createTime: string;
  deptId: number;
  projectId: number;
  projectName: string;
  projectStatus: number;
  projectType: number;
  remark: string;
  templateType: number;
  updateBy: string;
  updateTime: string;
}

export interface TemplateContent {
  'cop-title': Coptitle;
  'cop-banner': Copbanner;
  'cop-bgm': Copbgm;
  'cop-blurb': Coptitle;
  'cop-merit': Copmerit;
  'cop-donaLantern'?: CopdonaLantern;
  'cop-donaType'?: CopdonaType;
  'cop-submit': Copsubmit;
  'cop-mine': Copmine;
}
export interface Copsubmit {
  display: boolean;
  type: string;
  'cop-donaPhone': CopdonaNameOrPhone;
  'cop-donaWish': CopdonaWish;
  'cop-submitButton': CopsubmitButton;
  'cop-lampPrice'?: CoplampPrice;
  'cop-donaDuration'?: CopdonaDuration;
  'cop-donaName'?: CopdonaNameOrPhone;
  'cop-donaType'?: CopdonaTypeSubmit;
}

export interface CopBase {
  display?: boolean;
  hide?: boolean;
  name: string;
  require: boolean;
  label: string;
}
export interface CopdonaType extends CopBase {
  title: string;
  manual: boolean;
  value: CopdonaTypeValue[];
  upper: string[];
}
export interface CopdonaTypeSubmit extends CopBase {
  length: number;
  list: any[];
}

export interface CopdonaTypeValue {
  rules: any;
  value: number;
  upper: string;
}
export interface Copmine {
  display: boolean;
  value: string;
  name: string;
}
export interface CopsubmitButton {
  value: string;
  label: string;
}

export interface CopdonaWish extends CopBase {
  inline: boolean;
  value: string;
  list: WishList[];
}

export interface WishList {
  value: string;
  rules?: Rule[];
}

export interface CopdonaNameOrPhone extends CopBase {
  length: number;
}

export interface CopdonaDuration extends CopBase {
  price: number;
  manual: boolean;
  value: string;
  list: any[];
}

export interface Rule {
  required: boolean;
  message: string;
  trigger: string;
}

export interface CoplampPrice {
  name: string;
  label: string;
  value: number;
}

export interface Copmerit {
  title: string;
  display: boolean;
  limit: number;
  field: string[];
  value: MeritValue[];
}

export interface CopdonaLantern {
  name: string;
  title: string;
  label: string;
  display: boolean;
  value: DonaValue[];
  type: string;
}
export interface MeritValue {
  time: string;
  name: string;
  type: string;
  amt: number;
}

export interface MeritList {
  pages: MeritObj[];
  total: number;
}
export interface MeritObj {
  projectId: number;
  totalAmt: number;
  lanternName?: string;
  donateTypeName?: string;
  wishContent: string;
  name: string;
  createTime: string;
  endTime?: string;
  projectType: number;
  id: string;
  pushType?: any;
}
export interface DonaValue {
  name: string;
  url: string;
  desc: string;
  id: string;
}

export interface Copbgm {
  value: Value;
  display: boolean;
}

export interface Copbanner {
  model: number;
  value: Value[];
  display: boolean;
}

export interface Value {
  url: string;
  name: string;
  imageUrl: string;
}

export interface Coptitle {
  value: string;
  display: boolean;
}
