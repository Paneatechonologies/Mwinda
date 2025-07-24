$(document).ready(function () {
  // Drawer menu mobile
  $('.menu-toggle').on('click', function () {
    $('#drawer').addClass('open');
  });
  $('.close-drawer, #drawer a').on('click', function () {
    $('#drawer').removeClass('open');
  });

  // Formulaire de réservation
  $('#reservationForm').on('submit', function (e) {
    e.preventDefault();
    if (typeof Swal !== 'undefined') {
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
    }
    this.reset();
  });

  // Carousel
  let currentSlide = 0;
  const slides = $('#carousel .carousel-slide');
  const totalSlides = slides.length;
  function showSlide(idx) {
    slides.removeClass('active');
    slides.eq(idx).addClass('active');
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }
  $('.carousel-next').on('click', nextSlide);
  $('.carousel-prev').on('click', prevSlide);
  let carouselInterval = setInterval(nextSlide, 4000);
  $('#carousel').hover(
    function () { clearInterval(carouselInterval); },
    function () { carouselInterval = setInterval(nextSlide, 4000); }
  );

  // Initialiser la carte Leaflet
  if ($('#map').length) {
    var map = L.map('map').setView([-4.325, 15.322], 13); // Kinshasa par défaut
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([-4.325, 15.322]).addTo(map)
      .bindPopup('Mwinda - Kinshasa')
      .openPopup();
  }

  


}); 