const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.classList.add('modal-open');
}

span.onclick = function() {
  modal.classList.remove('modal-open');
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('modal-open')
  }
}