function observeElement(element, type) {
  const getHandler = resolve => {
    const result = () => {
      resolve();
      element.removeEventListener(type, result);
    };
    return result;
  };
  // return new Promise(resolve => element.addEventListener(type, getHandler(resolve)));
  return new Promise(resolve => this.addEventListener(type, resolve, {once: true}));

}

// メインの非同期関数を定義
async function main() {
  while (true) {
    // ボタンクリックを待つ
    await observeElement(document.getElementById("button"), "click");

    // ワークエリアを取得
    const workArea = document.getElementById("js-contact");

    // ワークエリアをバックアップ
    const backup = workArea.cloneNode(true);

    // ワークエリアを結果で書き換える
    workArea.innerHTML = `
      <p>確認画面</p>
      <p>1.TEXT: ${document.getElementsByName("entry.2005620554")[0].value}</p>
      <input id="back" type="button" value="戻る">
    `;

    // 戻るボタンのクリックを待つ
    await observeElement(document.getElementById("back"), "click");

    // ワークエリアを戻す
    document.body.replaceChild(backup, workArea);
  }
}

// モジュールとしてエクスポート
export { observeElement, main };