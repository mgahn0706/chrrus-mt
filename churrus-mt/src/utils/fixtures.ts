export const codyItem: CodyItemType[] = [
  {
    title: "고준재",
    pointColor: ["GJ", "1", "4", "airport"],
    place: "??? 물품보관소",
    age: 34,
    mobile: "010-****-????",
    type: "A",
    image:
      "https://static.lookpin.co.kr/20230126104943-57ed/672245a9b309d9c79a62abd47e239f23.jpg?resize=880",
  },
  {
    title: "안규민",
    pointColor: ["5", "3"],
    place: "서울송파경찰서",
    age: 29,
    mobile: "010-****-2189",
    type: "A",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxOTA4MDlfMjY0/MDAxNTY1MzQ5NzY1MTY2.T9niD9CJAnsoieXDgrNAFDCiGO0XIRbgeFmoGFxD71Yg.vejxNfWnW3ayupANkS8WR8UZdTpHapwmt9xkIB9qIoYg.JPEG.921130jh/%EB%B3%B4%EB%9D%BC%EC%83%89%EB%B0%98%ED%8C%94%ED%8B%B0%EC%BD%94%EB%94%94_(9).JPG?type=w800",
  },
  {
    title: "홍아경",
    pointColor: ["SBD", "7"],
    place: "원더시티 뉴욕컵케이크",
    age: 24,
    mobile: "010-****-2084",
    type: "A",
    image:
      "https://i0.codibook.net/files/1980030648017/96292afca9db61cb/542614570.jpg",
  },
  {
    title: "김훈지",
    pointColor: ["1", "BD"],
    place: "롯데백화점 수원점",
    age: 30,
    mobile: "010-****-3000",
    type: "A",
    image:
      "https://static.lookpin.co.kr/20210726160752-349e/c799e8e747bde1d7d8e5563bc86a0b81.jpg?resize=880",
  },
];

export interface CodyItemType {
  title: string;
  pointColor: string[];
  place: string;
  age: number;
  mobile: string;
  type: "A" | "B" | "C" | "D" | "E";
  image: string;
}
