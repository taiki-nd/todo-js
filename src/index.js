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
    alert("完了");
  });

  // btn削除
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    // 削除で親タグのdivを削除
    const deleteTarget = deleteBtn.parentNode;
    document.getElementById("incomplete_lists").removeChild(deleteTarget);
  });

  // divタグの子要素にする設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  // ulタグの子要素にする設定
  document.getElementById("incomplete_lists").appendChild(div);
};

document
  .getElementById("add_btn")
  .addEventListener("click", () => onClickAdd());
