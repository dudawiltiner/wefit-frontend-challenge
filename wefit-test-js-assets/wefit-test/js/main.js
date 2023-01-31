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
hedaerA.setAttribute("style", "background-color: #28a744; border: none");

// CARDS
const cardsContainer = document.querySelector("body > div > div:nth-child(6)");
const cards = document.querySelectorAll("div.col-lg-3");

cards.forEach((el) => el.remove());

cardsContainer.appendChild(cards[3]);
cardsContainer.appendChild(cards[0]);
cardsContainer.appendChild(cards[2]);
cardsContainer.appendChild(cards[1]);

cardsContainer
  .querySelector(
    "body > div > div:nth-child(6) > div:nth-child(3) > div > div > a"
  )
  .setAttribute("style", "background-color: #28a744; border: none");

// LISTA
const listItems = document.querySelector(".list-group");

listItems.querySelectorAll("li").forEach((el) => el.remove());

const positions = {
  0: "Primeiro",
  1: "Segundo",
  2: "Terceiro",
  3: "Quarto",
  4: "Quinto",
};

for (let i = 0; i < Object.keys(positions).length; i++) {
  const li = document.createElement("li");
  li.classList.add(`list-group-item`);

  if (i === 3) {
    li.classList.add(`active`);
  }

  li.textContent = `${positions[i]} item`;
  listItems.appendChild(li);
}
