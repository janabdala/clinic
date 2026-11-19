const service = document.querySelector('#service');
const repairs = document.querySelector('#repairs');
const total = document.querySelector('#total');

function showEstimate() {
  const numberOfRepairs = Math.max(
    0,
    Math.floor(Number(repairs.value) || 0)
  );

  const price = Number(service.value) + numberOfRepairs * 5;
  total.textContent = '€' + price;
}

service.addEventListener('change', showEstimate);
repairs.addEventListener('input', showEstimate);

showEstimate();

const booking = document.querySelector('#booking');
const message = document.querySelector('#message');

booking.addEventListener('submit', function(event) {
  event.preventDefault();
  message.textContent =
    'Nothing was sent and nothing was booked. This page cannot take bookings yet.';
});
