$(document).ready(function() {
  // Drawer menu mobile
  $('.menu-toggle').on('click', function() {
    $('#drawer').addClass('open');
  });
  $('.close-drawer, #drawer a').on('click', function() {
    $('#drawer').removeClass('open');
  });

  // Formulaire de réservation
  $('#reservationForm').on('submit', function(e) {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Réservation envoyée !',
      text: 'Merci ! Un chauffeur vous contactera rapidement.',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'btn-main'
      },
      buttonsStyling: false
    });
    this.reset();
  });
}); 