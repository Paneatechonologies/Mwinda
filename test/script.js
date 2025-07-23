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
    $('#confirmation').fadeIn();
    this.reset();
    setTimeout(function() {
      $('#confirmation').fadeOut();
    }, 5000);
  });
}); 