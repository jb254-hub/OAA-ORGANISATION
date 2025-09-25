
  document.getElementById("applicationForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      let response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Redirect after successful submission
        window.location.href = "YOUR_REDIRECT_URL_HERE";
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function (e) {
    // F12 or Ctrl+Shift+I or Ctrl+U
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      alert("Action disabled");
    }
  });
