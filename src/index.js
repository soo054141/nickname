const displayNickname = document.querySelector(".displayNickname");

const data = [
  "사과",
  "과일",
  "불주먹",
  "바루스",
  "콜라",
  "에어서큘레이터",
  "에어프라이어",
  "애쉬",
  "블리츠크랭크",
  "사이다",
  "벼룩파리",
  "리모컨",
  "모니터",
  "마우스",
  "무선",
  "유선",
  "유리창",
  "번개",
  "천둥",
  "토르",
  "아이언맨",
  "블랙위도우",
  "제라스",
  "의자",
  "맨",
  "우먼",
  "아저씨",
  "아줌마",
];

function btnClick() {
  const firstData = Math.floor(Math.random() * data.length);
  const secondData = Math.floor(Math.random() * data.length);
  if (firstData !== secondData) {
    displayNickname.innerHTML = data[firstData] + " " + data[secondData];
  }
}
