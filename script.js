  // Splash screen timeout
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
  }, 3000);

  // Sidebar toggle
  const sidebar = document.getElementById("sidebar");
  function toggleSidebar() {
    sidebar.classList.toggle("active");
  }

  document.addEventListener("click", function(event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isHamburger = event.target.closest('.hamburger');
    if (!isClickInsideSidebar && !isHamburger && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  });

  // Blogs
  const blogs = [
    {
      id: "1",
      title: "Join One Africa Alliance (OAA) Waste Connect Program",
      description: "Details on sustainable waste management initiatives, community solutions and how waste connect program aims to connect waste groups and individuals to help turn Africa's waste challenges into opportunities.",
      image: "https://res.cloudinary.com/devwniw2h/image/upload/v1758703548/IMG-20250921-WA0005_bfujb8.jpg",
      postedText: "Posted Wednesday, September 24",
      link: "/waste-connect/"
    },
    {
      id: "2",
      title: "One Africa Alliance (OAA) Job Opportunities: Let Us Join Hands To Build Africa.",
      description: "Explore current opportunities to work with One Africa Alliance to help shape Africa.",
      image: "https://th.bing.com/th/id/OIP.RLqb_yIMiGP9Z2Vidg0IKAHaGW?w=201&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
      postedText: "Published Wednesday, September 24",
      link: "/job-opportunity/"
    },
    {
      id: "3",
      title: "One Africa Alliance Youth Empowerment Program",
      description: "Details on programs to help empower youths in Africa with everything that might be needed to help shape the next Generation.",
      image: "https://res.cloudinary.com/devwniw2h/image/upload/v1758660831/1758620489882_zinhdn.jpg",
      postedText: "Posted Wednesday, September 24",
      link: "youth-empowerment"
    }
  ];

  function renderBlogs() {
    const container = document.getElementById("blogs");
    container.innerHTML = "";
    blogs.forEach(blog => {
      const article = document.createElement("div");
      article.className = "blog";
      article.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}" onclick="window.open('${blog.link}', '_blank')">
        <div class="blog-content">
          <h2>${blog.title}</h2>
          <p onclick="window.open('${blog.link}', '_blank')">${blog.description}</p>
          <div class="blog-footer">
            <span>${blog.postedText}</span>
            <button class="btn-icon" onclick="sharePost('${blog.title}', '${blog.link}')">
              <svg fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v13"/>
              </svg> Share
            </button>
          </div>
        </div>
      `;
      container.appendChild(article);
    });
  }

  function sharePost(title, link) {
    if (navigator.share) {
      navigator.share({ title, url: link }).catch(err => console.log("Share failed:", err));
    } else {
      navigator.clipboard.writeText(link).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  }

  renderBlogs();

  // Security shortcuts disabled
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      alert("Action disabled");
    }
  });

  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LMNE15KDLR');

  document.addEventListener("click", function(e) {
    let target = e.target.closest("a");
    if (target && target.hostname !== location.hostname) {
      gtag("event", "click", {
        "event_category": "outbound",
        "event_label": target.href,
        "transport_type": "beacon"
      });
    }
  });

  window.addEventListener("scroll", function() {
    let scrollDepth = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
    if (scrollDepth >= 25 && !window.scroll25) { gtag("event", "scroll_depth", {percent: 25}); window.scroll25 = true; }
    if (scrollDepth >= 50 && !window.scroll50) { gtag("event", "scroll_depth", {percent: 50}); window.scroll50 = true; }
    if (scrollDepth >= 75 && !window.scroll75) { gtag("event", "scroll_depth", {percent: 75}); window.scroll75 = true; }
    if (scrollDepth >= 100 && !window.scroll100) { gtag("event", "scroll_depth", {percent: 100}); window.scroll100 = true; }
  });
