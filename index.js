(() => {
  const target = 'https://schedule.lwhsftc.org';
  const initialSeconds = 2;
  let seconds = initialSeconds;

  const headline = document.getElementById('headline');
  if (headline) {
    headline.textContent = `Redirecting to main website... (${seconds}s)`;
  }

  const interval = setInterval(() => {
    seconds -= 1;
    if (headline) {
      headline.textContent = seconds > 0
        ? `Redirecting to main website... (${seconds}s)`
        : `Redirecting to main website...`;
    }

    if (seconds <= 0) {
      clearInterval(interval);
      window.location.replace(target);
    }
  }, 1000);

  setTimeout(() => {
    window.location.replace(target);
  }, (initialSeconds + 1) * 1000);
})();
