const axios = require("axios");
const cheerio = require("cheerio");

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
async function getHTML() {
  try {
    return await axios.get(
      "https://stdict.korean.go.kr/api/view.do?key=2ACB7EF719126ADDB05C1EFCAF7E56EC&method=TARGET_CODE&q=100"
    );
  } catch (error) {
    console.error(error);
  }
}

getHTML().then((html) => {
  let ulList = [];
  const $ = cheerio.load(html.data);
  console.log(ulList);
});
