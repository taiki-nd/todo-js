const onClickAdd = () => {
  //テキストボックスの値の取得と初期化
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list_row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // btn完了
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // 完了で親タグのdivを削除
    deleteFromIncompleteLists(completeBtn.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeBtn.parentNode;

    // todo内容取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liの生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すbtn
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      

    // divタグの子要素にする設定
    div.appendChild(li);
    div.appendChild(backBtn);

    // ulタグの子要素にする設定
    document.getElementById("complete_lists").appendChild(addTarget);
  });

  // btn削除
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    // 削除で親タグのdivを削除
    deleteFromIncompleteLists(deleteBtn.parentNode);
  });

  // divタグの子要素にする設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  // ulタグの子要素にする設定
  document.getElementById("incomplete_lists").appendChild(div);
};

// 未完了リストから指定要素の削除
const deleteFromIncompleteLists = (target) => {
  document.getElementById("incomplete_lists").removeChild(target);
};

document
  .getElementById("add_btn")
  .addEventListener("click", () => onClickAdd());
