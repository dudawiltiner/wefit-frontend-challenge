const listButtonMenu = document.querySelector(".btn-group-vertical");
listButtonMenu.setAttribute(
  "style",
  "flex-direction: row; width: 100%; justify-content: start"
);

for (let i = 0; i < listButtonMenu.children.length; i++) {
  listButtonMenu.children[i].setAttribute(
    "style",
    "width: max-content; flex: none; border-radius: 0.25rem; margin-right: 4px"
  );
}
