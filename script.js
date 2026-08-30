// DARK MODE
    const root = document.documentElement;
    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("john-theme");

    if (savedTheme) {
      root.dataset.theme = savedTheme;
    }

    themeToggle.textContent =
      root.dataset.theme === "dark" ? "☀" : "☾";

    themeToggle.addEventListener("click", () => {
      const dark = root.dataset.theme === "dark";

      root.dataset.theme = dark ? "light" : "dark";
      themeToggle.textContent = dark ? "☾" : "☀";

      localStorage.setItem(
        "john-theme",
        dark ? "light" : "dark"
      );
    });

    // MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

    // ACTIVE NAVIGATION
    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".nav-links a");

    const navObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            links.forEach(link => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + entry.target.id
              );
            });
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px"
      }
    );

    sections.forEach(section => navObserver.observe(section));

    // SCROLL REVEAL
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    document
      .querySelectorAll(".reveal")
      .forEach(element => revealObserver.observe(element));

    // PROJECT FILTERS
    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project");

    filters.forEach(filter => {
      filter.addEventListener("click", () => {

        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");

        const value = filter.dataset.filter;

        projects.forEach(project => {
          if (
            value === "all" ||
            project.dataset.category === value
          ) {
            project.style.display = "";
          } else {
            project.style.display = "none";
          }
        });
      });
    });

    // TOAST
    const toast = document.getElementById("toast");

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 2600);
    }

    document.querySelectorAll("[data-demo]").forEach(link => {
      link.addEventListener("click", () => {
        showToast(
          `${link.dataset.demo} is a portfolio demo placeholder.`
        );
      });
    });

    // CONTACT FORM
    document
      .getElementById("contactForm")
      .addEventListener("submit", event => {

        event.preventDefault();

        const name =
          document.getElementById("name").value.trim();

        const email =
          document.getElementById("email").value.trim();

        const subject =
          document.getElementById("subject").value.trim();

        const message =
          document.getElementById("message").value.trim();

        const body =
          `Hi Shreyas,\n\n${message}\n\nFrom: ${name} (${email})`;

        window.location.href =
          `mailto:shreyasbm2k5@gmail.com` +
          `?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(body)}`;

        showToast("Opening your email client...");
      });

    // CURRENT YEAR
    document.getElementById("year").textContent =
      new Date().getFullYear();