const button = document.getElementById(`button`);
button.addEventListener(`click`, () => {
  const foodContainer = document.getElementById(`list`);
  const userInput = document.getElementById(`userInput`).value;
  const list = document.createElement(`li`);
  const textContent = document.createTextNode(userInput);
  const divEle = document.createElement(`div`);
  const xMark = document.createElement(`i`);
  xMark.setAttribute(`onclick`, `remover()`);
  list.className = `list-item`;
  xMark.className = `fa-solid fa-xmark`;
  list.append(divEle);
  divEle.append(textContent);
  divEle.append(xMark);
  foodContainer.append(list);
  console.log(foodContainer);
});

function remover() {
  let existingValue = event.target.parentNode;
  existingValue.remove();
}
