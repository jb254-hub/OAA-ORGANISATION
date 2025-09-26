    // Animate fadeInUp on load
    window.onload = () => {
      document.querySelector('main section').style.opacity = '1';
      document.querySelector('main section').style.transform = 'translateY(0)';
    }
    // Update year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();
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
