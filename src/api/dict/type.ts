export interface DictType {
  searchValue?: any;
  createBy: string;
  createTime: string;
  updateBy?: any;
  updateTime?: any;
  remark?: any;
  params: Params;
  deptId?: any;
  dictCode: number;
  dictSort: number;
  dictLabel: string;
  dictValue: string;
  dictType: string;
  cssClass?: any;
  listClass: string;
  isDefault: string;
  status: string;
  default: boolean;
}
interface Params {}
