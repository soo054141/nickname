const displayNickname = document.querySelector(".displayNickname");

const data = ["사과", "과일", "불주먹", "바루스", "애쉬", "블리츠크랭크"];

function btnClick() {
  const dataNum = Math.floor(Math.random() * data.length);
  displayNickname.innerHTML = data[dataNum];
}
