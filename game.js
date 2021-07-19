const gameText = document.getElementById("game-text");
const options = document.getElementById("options");

export const setGameText = (text) => {
  gameText.innerHTML = text;
};

const createOption = (text, callback) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = text;
  newDiv.onclick = () => {
    options.replaceChildren();
    callback();
  };
  newDiv.classList.add("option");
  return newDiv;
};

export const addOption = (text, callback) => {
  options.appendChild(createOption(text, callback));
};
