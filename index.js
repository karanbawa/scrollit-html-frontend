const designerTab = document.getElementById("designer-tab");
const marketingTab = document.getElementById("marketer-tab");
const developerTab = document.getElementById("developer-tab");

designerTab.addEventListener("click", (event) => {
  console.log("called");
  console.log(
    designerTab.children[0].children[0].children[1].setAttribute(
      "style",
      "display: none;"
    )
  );
  console.log(
    designerTab.children[0].children[0].children[2].setAttribute(
      "style",
      "height: 0px; opacity: 0;"
    )
  );

  console.log(
    designerTab.children[0].children[0].classList.contains("w--current")
      ? designerTab.children[0].children[0].classList.remove("w--current")
      : designerTab.children[0].children[0].classList.add("w--current")
  );
});

designerTab.addEventListener("click", (event) => {});

designerTab.addEventListener("click", (event) => {});
