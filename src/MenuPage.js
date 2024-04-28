function menuContainer() {
  const menuContainer = document.createElement("div");
  const menuTitle = document.createElement("h1");

  menuTitle.innerText = "Menu Items";

  menuContainer.appendChild(menuTitle);

  return menuContainer;
}

function renderMenuPage() {
  const contentContainer = document.getElementById("content");
  contentContainer.appendChild(menuContainer());
}

export default renderMenuPage;
