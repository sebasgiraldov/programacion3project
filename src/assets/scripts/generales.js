document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});


function initMaterializeSelect() {
  // select
  //alert('desde la inicialización del select')
  var elems = document.querySelectorAll('select');
  console.log(elems)
  var instances = M.FormSelect.init(elems, {});
}

function openPlatformModalMessage(message) {
  document.querySelector("#pMessage").innerHTML = message;
  openModal('modalMessage');
}

function openConfirmationModal() {
  openModal("modalConfirmation")
}

function openConfirmationModal2() {
  openModal("modalConfirmation2")
}

function openAsignarModal() {
  openModal("modalAsignar")
}

function openImagenModal() {
  openModal("modalImagen")
}

function openDetallesModal() {
  openModal("modalDetalles")
}

function openComentariosModal() {
  openModal("modalComentarios")
}



let openModal = (modalId) => {
  var elem = document.querySelector(`#${modalId}`);
  let instance = M.Modal.init(elem, {});
  instance.open();
}
