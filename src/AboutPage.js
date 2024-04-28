function AboutContainer() {
  const aboutContainer = document.createElement("div");
  const aboutContent = document.createElement("div");

  const aboutTitle = document.createElement("h1");
  aboutTitle.innerText = "About Page";

  aboutContent.innerText =
    "qeopihgaepgjha;hgnpaeohrg eaighcaergh eoghaperhg;aeghcspoe  eonghaoperhcpdjcnfasg aepricghagpi cergoc aegoah;lsnv;al f";

  aboutContainer.appendChild(aboutTitle);
  aboutContainer.appendChild(aboutContent);

  return aboutContainer;
}

function renderAboutPage() {
  const contentContainer = document.getElementById("content");
  contentContainer.appendChild(AboutContainer());
}

export default renderAboutPage;
