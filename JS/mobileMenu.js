const menuBtn = document.querySelector('#mobile-menu');

menuBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let menu = document.querySelector('#navigation__right');
  let logo = document.querySelector('#navigation__left');
  logo.classList.toggle("mobile-menu");
  let closeBtn = logo.lastElementChild;
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>';
  }
  else {
    menu.style.maxHeight = menu.scrollHeight + "svh";
    closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>';
  }
});