const url = "./json/zodiac.json"; // 読み込むJSONファイル

// 12星座情報を整形して表示する
function formatJSON(json) {
  console.log(json);

  // JSONファイルを整形して表示
  let html = "";
  let x = "";
  x = Math.floor(Math.random() * json.length);
  html += `
  <img src="${json[x].images}" alt="${json[x].ja}" />
  <p>私は<span class="col">${json[x].ja}</span>です。</p><br/>
  <p id="dataload">国籍：${json[x].latin}</p><br/>
  <p>紹介：${json[x].text}</p><br/>
  `;
  document.getElementById("result").innerHTML = html;
}

// 起動時の処理
// window.addEventListener("load", () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => formatJSON(data));
// });

//ボタンクリック時に起動
const dataOpen = document.querySelector(".js-modal-open");

dataOpen.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => formatJSON(data));
});
