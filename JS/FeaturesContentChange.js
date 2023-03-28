const featuresButtons = document.querySelector("#features-buttons");

featuresButtons.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const buttons = [...document.querySelectorAll("#features-buttons a")];
    const elementIndex = buttons.indexOf(event.target);
    if (elementIndex == 0) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", '../FeaturesContent/SimpleBookmarking.html');
      xhr.onreadystatechange = () => {
        if ((xhr.status == 200) && (xhr.readyState == 4)){
          document.querySelector("#features-content").innerHTML = xhr.responseText;
        }
      }
      xhr.send();

      buttons[0].classList.add("btn-active");
      buttons[1].classList.remove("btn-active");
      buttons[2].classList.remove("btn-active");
    }
    else if (elementIndex == 1) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", '../FeaturesContent/SpeedySearching.html');
      xhr.onreadystatechange = () => {
        if ((xhr.status == 200) && (xhr.readyState == 4)){
          document.querySelector("#features-content").innerHTML = xhr.responseText;
        }
      }
      xhr.send();

      buttons[0].classList.remove("btn-active");
      buttons[1].classList.add("btn-active");
      buttons[2].classList.remove("btn-active");
    }
    else if (elementIndex == 2) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", '../FeaturesContent/EasySharing.html');
      xhr.onreadystatechange = () => {
        if ((xhr.status == 200) && (xhr.readyState == 4)){
          document.querySelector("#features-content").innerHTML = xhr.responseText;
        }
      }
      xhr.send();

      buttons[0].classList.remove("btn-active");
      buttons[1].classList.remove("btn-active");
      buttons[2].classList.add("btn-active");
    }
  }
  event.preventDefault();
});