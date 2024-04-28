function titleContainer() {
  const titleContainer = document.createElement("div");
  const titleContent = document.createElement("div");

  titleContainer.classList.add("title-container");
  titleContent.innerHTML = "Tom's Kitchen & Bakery";
  titleContainer.appendChild(titleContent);

  return titleContainer;
}

function articleContainer() {
  const articleContainer = document.createElement("div");
  const articleContent = document.createElement("div");

  articleContent.innerHTML =
    "This is the best restaurant/bakery in all of the world. Read more about this establishment in this article";

  articleContainer.classList.add("article-container");
  articleContainer.appendChild(articleContent);

  return articleContainer;
}

function renderHomePage() {
  const contentContainer = document.getElementById("content");
  contentContainer.appendChild(titleContainer());
  contentContainer.appendChild(articleContainer());
}

export default renderHomePage;
