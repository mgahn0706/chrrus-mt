export const codyItem: CodyItemType[] = [
  {
    title: "후드티",
    pointColor: ["GJ", "1", "4", "airport"],
    place: "??역 물품보관소",
    age: 34,
    mobile: "010-AAAA-????",
    type: "A",
    image:
      "https://static.lookpin.co.kr/20230126104943-57ed/672245a9b309d9c79a62abd47e239f23.jpg?resize=880",
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
