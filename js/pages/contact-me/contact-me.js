document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.textContent = '✓ Message sent! I\'ll get back to you soon.';
    msg.classList.remove('hidden');
    e.target.reset();
    setTimeout(function () { msg.classList.add('hidden'); }, 4000);
  });
});
