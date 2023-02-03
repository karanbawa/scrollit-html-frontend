// const designerTab = document.getElementById("designer-tab");
// const marketingTab = document.getElementById("marketer-tab");
// const developerTab = document.getElementById("developer-tab");

// designerTab.addEventListener("click", (event) => {
//   console.log("called");
//   console.log(
//     designerTab.children[0].children[0].children[1].setAttribute(
//       "style",
//       "display: none;"
//     )
//   );
//   console.log(
//     designerTab.children[0].children[0].children[2].setAttribute(
//       "style",
//       "height: 0px; opacity: 0;"
//     )
//   );

//   console.log(
//     designerTab.children[0].children[0].classList.contains("w--current")
//       ? designerTab.children[0].children[0].classList.remove("w--current")
//       : designerTab.children[0].children[0].classList.add("w--current")
//   );
// });

// designerTab.addEventListener("click", (event) => {});

// designerTab.addEventListener("click", (event) => {});

// Get the modal
var modal = document.getElementById("myGetStartedModal");

// Get the button that opens the modal
document
  .getElementById("myGetStartedBtn")
  ?.addEventListener("click", function () {
    modal.style.display = "block";
  });

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn?.onclick = function () {
//   modal.style.display = "block";
//   console.log("button clicked");
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function testResults(form) {
  const name = document.getElementById("name");
  const email = document.getElementById("mail");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  postData("https://api.univolenitsolutions.com/v1/form/scrollitFormMail", {
    name: name?.value,
    email: email?.value,
    phone: phone?.value,
    message: message?.value,
  }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

  modal.style.display = "none";
}
