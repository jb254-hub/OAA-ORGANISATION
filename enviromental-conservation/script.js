document.getElementById('year').textContent = new Date().getFullYear();

    const btn = document.getElementById('joinBtn');
    btn.addEventListener('click', () => {
      const link = btn.getAttribute('data-link');
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    });

    // Disable right-click and certain key shortcuts to protect content
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
        alert("This action is disabled.");
      }
    });
