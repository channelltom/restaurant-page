import "./style.css";
import render from "./HomePage.js";
import renderAboutPage from "./AboutPage.js";
import renderHomePage from "./HomePage.js";
import renderMenuPage from "./MenuPage.js";

const buttons = document.querySelectorAll(".btn");

render();

function clearContent() {
  console.log("*************");
  const contentContainer = document.getElementById("content");
  contentContainer.replaceChildren("");
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    clearContent();
    console.log("clicked");
    console.log(e.target.innerText);
    const page = e.target.innerText;
    if (page === "About") {
      renderAboutPage();
    } else if (page === "Home") {
      render();
    } else if (page == "Menu") {
      renderMenuPage();
    }
  });
});
