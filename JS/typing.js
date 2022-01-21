const content = 'HELLO, STRANGER.';
const text = document.querySelector('#welcome span');
const click = document.querySelector('#login_form');
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 250);

function onMouseEnter() {
  text.innerText = 'WHAT IS YOUR NAME?';
}

click.addEventListener('mouseenter', function () {
  setTimeout(onMouseEnter, 4900);
});
