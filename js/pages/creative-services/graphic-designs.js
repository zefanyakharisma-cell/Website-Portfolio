document.addEventListener('DOMContentLoaded', function () {
  var page = document.getElementById('page-designs');
  if (!page) return;

  // On touch devices hover doesn't fire, so tap toggles the overlay.
  page.querySelectorAll('.group').forEach(function (item) {
    item.addEventListener('click', function () {
      // Close any other open item first.
      page.querySelectorAll('.group.is-flipped').forEach(function (open) {
        if (open !== item) open.classList.remove('is-flipped');
      });
      item.classList.toggle('is-flipped');
    });
  });

  // Tap outside any card to close it.
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#page-designs .group')) {
      page.querySelectorAll('.group.is-flipped').forEach(function (open) {
        open.classList.remove('is-flipped');
      });
    }
  });
});
