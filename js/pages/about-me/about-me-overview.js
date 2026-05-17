function toggleAboutTimeline(btn) {
  const body = btn.nextElementSibling;
  const chevron = btn.querySelector('.timeline-chevron');
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  if (!isOpen) lucide.createIcons();
}
