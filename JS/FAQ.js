const question = document.querySelectorAll(".question");

for (var i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    let content = this.nextElementSibling;
    let link = this.firstElementChild;
    let icon = link.lastElementChild;
    let iconColor = icon.firstElementChild.getAttribute("stroke");
    link.classList.toggle("active");
    icon.classList.toggle("rotate");
    if (iconColor == "#5267DF"){
      icon.firstElementChild.setAttribute("stroke", "hsl(0, 94%, 66%)");
    }
    else if (iconColor == "hsl(0, 94%, 66%)"){
      icon.firstElementChild.setAttribute("stroke", "#5267DF");
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    }
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}