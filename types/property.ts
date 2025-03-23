// types/property.ts

export type PropertyData = {
  name: string; //物件名
  price: string; //価格
  layout: string; //間取り
  unitsForSale: string; //販売戸数
  totalUnits: string; //総戸数
  area: string; //占有面積
  balconyArea: string; //その他面積
  floor: string; //所在階
  structure: string; //構造・階建
  completionDate: string; //完成時期（築年月）
  address: string; //住所
  direction: string; //向き
  transportation: string[]; //交通
};
