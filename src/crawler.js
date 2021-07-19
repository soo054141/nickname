// fetch(
//   "https://stdict.korean.go.kr/api/search.do?key=2ACB7EF719126ADDB05C1EFCAF7E56EC&q=안녕&method=word_info"
// ).then((response) => console.log(response));

const request = new Request(
  "https://stdict.korean.go.kr/api/search.do?key=2ACB7EF719126ADDB05C1EFCAF7E56EC&method=word_info"
);

fetch(request).then((response) => response.blob());
