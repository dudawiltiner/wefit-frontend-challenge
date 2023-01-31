// MENU
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

// HEADER
const hedaerContainer = document.querySelector(".jumbotron");
hedaerContainer.setAttribute(
  "style",
  "background-color: #6c757d; color: white; display: flex; flex-direction: column; align-items: end; width: 100%"
);

const hedaerH1 = hedaerContainer.querySelector("h1");
hedaerH1.setAttribute("style", "display: flex; justify-content: end");

const hedaerP = hedaerContainer.querySelectorAll("p");
hedaerP[0].setAttribute("style", "display: flex; justify-content: end");
hedaerP[1].setAttribute(
  "style",
  "display: flex; justify-content: end; text-align: right;"
);

const hedaerHR = hedaerContainer.querySelector(".my-4");
hedaerHR.setAttribute("style", "width: 100%;");

const hedaerA = hedaerContainer.querySelector("a");
hedaerA.setAttribute("style", "background-color: green; border: none");
