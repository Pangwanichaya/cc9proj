import { v4 as uuidv4 } from "uuid";
const foods = [
  {
    id: uuidv4(),
    name: "lasagne veg",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633506290/food/food4lasagne-veg_Custom_q3khnx.jpg",
  },
  {
    id: uuidv4(),
    name: "Khao Pad",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633506339/food/food9Khao_Pad_Custom_xhx4re.jpg",
  },
  {
    id: uuidv4(),
    name: "Pad See Eiw",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633506325/food/food7Pad_See_Eiw_Custom_qhiu8y.jpg",
  },
  {
    id: uuidv4(),
    name: "Tom Kha Ga",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633506407/food/food6Tom_Kha_Ga_Custom_zqgakd.jpg",
  },
  {
    id: uuidv4(),
    name: "Yakhni",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633506451/food/food2Yakhni_Custom_bfr11j.jpg",
  },
  {
    id: uuidv4(),
    name: "Lentil Koftas",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633506500/food/food3Lentil_Koftas_Custom_uuckif.jpg",
  },
];

const drinks = [
  {
    id: uuidv4(),
    name: "เอสเพรสโซ่เย็น",
    price: 79,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633507533/drink/%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%AA%E0%B9%82%E0%B8%8B%E0%B9%88%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99_Custom_n49myx.jpg",
  },
  {
    id: uuidv4(),
    name: "เอสเพรสโซ่ร้อน",
    price: 69,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633507533/drink/%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%AA%E0%B9%82%E0%B8%8B%E0%B9%88%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99_Custom_uwnlom.jpg",
  },
  {
    id: uuidv4(),
    name: "อาริเมกาโน่ร้อน",
    price: 69,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633507534/drink/%E0%B8%AD%E0%B8%A3%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B9%82%E0%B8%99%E0%B9%88%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99_Custom_vlks3x.jpg",
  },
  {
    id: uuidv4(),
    name: "ชาเย็น",
    price: 79,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633507533/drink/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99_Custom_bivjio.jpg",
  },
  {
    id: uuidv4(),
    name: "ชาเขียวเย็น",
    price: 79,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633507533/drink/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99_Custom_veqtlg.jpg",
  },
  {
    id: uuidv4(),
    name: "โกโก้เย็น",
    price: 79,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633507533/drink/%E0%B9%82%E0%B8%81%E0%B9%82%E0%B8%81%E0%B9%89%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99_Custom_dx5qs4.jpg",
  },
  {
    id: uuidv4(),
    name: "น้ำส้มเย็น",
    price: 59,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633507533/drink/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99_Custom_pulnts.jpg",
  },
];

const pancakes = [
  {
    id: uuidv4(),
    name: "แพนเค้กสตอเบอร์รี่กล้วยหอม",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633508763/pancake/%E0%B9%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81%E0%B8%AA%E0%B8%95%E0%B8%AD%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AB%E0%B8%AD%E0%B8%A1_Custom_brykov.jpg",
  },
  {
    id: uuidv4(),
    name: "แพนเค้กช็อกโกแลตกล้วยหอมคาราเมล",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633508763/pancake/%E0%B9%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B9%82%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%95%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B9%80%E0%B8%A1%E0%B8%A5_Custom_qev9cu.jpg",
  },
  {
    id: uuidv4(),
    name: "แพนเค้กมะม่วง",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633508763/pancake/%E0%B9%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87_Custom_aai4zt.jpg",
  },
  {
    id: uuidv4(),
    name: "แพนเค้กวิปปิ้งครีมสตอเบอร์รี่",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633508763/pancake/%E0%B8%A7%E0%B8%B4%E0%B8%9B%E0%B8%9B%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1%E0%B8%AA%E0%B8%95%E0%B8%AD%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88_Custom_fzthso.jpg",
  },
  {
    id: uuidv4(),
    name: "แพนเค้กสตอเบอร์รี่บลูเบอร์รี่",
    price: 89,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633508763/pancake/%E0%B9%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81%E0%B8%AA%E0%B8%95%E0%B8%AD%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B8%A5%E0%B8%B9_Custom_zstpmx.jpg",
  },
];
const toppingpancakes = [
  {
    id: uuidv4(),
    name: "กล้วยหอม",
    price: 15,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AB%E0%B8%AD%E0%B8%A1_Custom_m44szd.jpg",
  },
  {
    id: uuidv4(),
    name: "สตอเบอร์รี่สด",
    price: 25,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509032/toppingpancake/%E0%B8%AA%E0%B8%95%E0%B8%AD%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88_Custom_s2zwrg.jpg",
  },
  {
    id: uuidv4(),
    name: "วิปปิ้งครีม",
    price: 15,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509032/toppingpancake/%E0%B8%A7%E0%B8%B4%E0%B8%9B%E0%B8%9B%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1_Custom_k4onql.jpg",
  },
  {
    id: uuidv4(),
    name: "นูเทลล่า",
    price: 30,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B8%99%E0%B8%B9%E0%B9%80%E0%B8%97%E0%B8%A5%E0%B8%A5%E0%B9%88%E0%B8%B2_Custom_gzjpve.jpg",
  },
  {
    id: uuidv4(),
    name: "ลูกเกด",
    price: 15,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509032/toppingpancake/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%94_Custom_gvjnol.jpg",
  },
  {
    id: uuidv4(),
    name: "คอร์นเฟลกธัญพืช",
    price: 30,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%99%E0%B9%80%E0%B8%9F%E0%B8%A5%E0%B8%81%E0%B8%AE%E0%B8%B1%E0%B8%8D%E0%B8%9E%E0%B8%B7%E0%B8%8A_Custom_euycw1.jpg",
  },
  {
    id: uuidv4(),
    name: "บลูเบอร์รี่สด",
    price: 25,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B8%9A%E0%B8%A5%E0%B8%B9%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88_Custom_wjzhp6.jpg",
  },
  {
    id: uuidv4(),
    name: "มะม่วงสด",
    price: 30,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87_Custom_gcsa2f.jpg",
  },
  {
    id: uuidv4(),
    name: "เยลลี่",
    price: 15,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B9%80%E0%B8%A2%E0%B8%A5%E0%B8%A5%E0%B8%B5%E0%B9%88_Custom_duus2s.jpg",
  },
  {
    id: uuidv4(),
    name: "เม็ดมะม่วงหิมพานต์",
    price: 25,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B9%80%E0%B8%A1%E0%B9%87%E0%B8%94%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%AB%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B9%8C_Custom_rwwame.jpg",
  },
  {
    id: uuidv4(),
    name: "แยมสตอเบอร์รี่",
    price: 15,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B9%81%E0%B8%A2%E0%B8%A1%E0%B8%AA%E0%B8%95%E0%B8%AD_Custom_cbt3xk.jpg",
  },
  {
    id: uuidv4(),
    name: "แอลม่อน",
    price: 25,
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633509031/toppingpancake/%E0%B9%81%E0%B8%AD%E0%B8%A5%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99_Custom_nde84w.jpg",
  },
];

const coupons = [
  {
    id: uuidv4(),
    name: "คูปองสำหรับอาหาร",
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633510767/coupon/%E0%B8%84%E0%B8%B9%E0%B8%9B%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3_Custom_wrlt0l.jpg",
  },
  {
    id: uuidv4(),
    name: "คูปองสำหรับแพนเค้ก",
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633510767/coupon/%E0%B8%84%E0%B8%B9%E0%B8%9B%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81_Custom_b1ahmv.jpg",
  },
  {
    id: uuidv4(),
    name: "คูปองสำหรับเครื่องดื่ม",
    image:
      "https://res.cloudinary.com/dz2pt34wb/image/upload/v1633510767/coupon/%E0%B8%84%E0%B8%B9%E0%B8%9B%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1_1_Custom_e3djbq.jpg",
  },
];

export { foods, drinks, pancakes, toppingpancakes, coupons };
