"use script";

function initMobileNav() {
  const hamburger = document.getElementById("nav-hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.getElementById("nav-overlay");
  if (!hamburger || !navLinks || !overlay) return;

  function openNav() {
    hamburger.classList.add("open");
    navLinks.classList.add("nav-open");
    overlay.style.display = "block";
    setTimeout(() => overlay.classList.add("active"), 10);
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    hamburger.classList.remove("open");
    navLinks.classList.remove("nav-open");
    overlay.classList.remove("active");
    setTimeout(() => (overlay.style.display = "none"), 350);
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    navLinks.classList.contains("nav-open") ? closeNav() : openNav();
  });

  overlay.addEventListener("click", closeNav);

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

function initNavActiveLink() {
  const navLinks = document.querySelectorAll(".nav-link");
  if (!navLinks.length) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

function initHeroCardSwap() {
  const front = document.querySelector(".hero-card--front");
  const back = document.querySelector(".hero-card--back");
  if (!front || !back) return;

  let swapped = false;
  if (window.innerWidth <= 968) return;

  setInterval(() => {
    swapped = !swapped;

    if (swapped) {
      front.style.cssText = `
        width: 72%; height: 52rem;
        top: 0; right: 0; bottom: auto; left: auto;
        transform: rotate(2deg);
        opacity: 0.75;
        z-index: 1;
      `;
      back.style.cssText = `
        width: 72%; height: 52rem;
        bottom: 0; left: 0; top: auto; right: auto;
        transform: rotate(-1.5deg);
        opacity: 1;
        z-index: 2;
        box-shadow: 0 2.4rem 8rem rgba(124, 58, 237, 0.2), 0 2.4rem 6rem rgba(0,0,0,0.6);
      `;
    } else {
      front.style.cssText = `
        width: 72%; height: 52rem;
        bottom: 0; left: 0; top: auto; right: auto;
        transform: rotate(-1.5deg);
        opacity: 1;
        z-index: 2;
        box-shadow: 0 2.4rem 8rem rgba(124, 58, 237, 0.2), 0 2.4rem 6rem rgba(0,0,0,0.6);
      `;
      back.style.cssText = `
        width: 72%; height: 52rem;
        top: 0; right: 0; bottom: auto; left: auto;
        transform: rotate(2deg);
        opacity: 0.75;
        z-index: 1;
      `;
    }
  }, 5000);
}

function initMarquee() {
  const row1 = document.getElementById("marquee-row-1");
  const row2 = document.getElementById("marquee-row-2");
  if (!row1 || !row2) return;

  const stackRow1 = [
    { icon: "fa-brands fa-react", label: "React 19" },
    { icon: "fa-solid fa-n", label: "Next.js 16" },
    { icon: "fa-brands fa-js", label: "TypeScript" },
    { icon: "fa-solid fa-link", label: "BNB Chain" },
    { icon: "fa-solid fa-satellite-dish", label: "Pyth Network" },
    { icon: "fa-solid fa-database", label: "Supabase" },
    { icon: "fa-solid fa-cube", label: "ethers.js" },
    { icon: "fa-solid fa-plug", label: "Wagmi" },
    { icon: "fa-solid fa-key", label: "Privy" },
    { icon: "fa-solid fa-wind", label: "Tailwind CSS" },
  ];

  const stackRow2 = [
    { icon: "fa-solid fa-chart-bar", label: "Recharts" },
    { icon: "fa-solid fa-store", label: "Zustand" },
    { icon: "fa-solid fa-shield-halved", label: "ConnectKit" },
    { icon: "fa-solid fa-server", label: "PostgreSQL" },
    { icon: "fa-solid fa-code-branch", label: "API Routes" },
    { icon: "fa-solid fa-money-bill-wave", label: "BNB Payments" },
    { icon: "fa-solid fa-clock", label: "x402 Payments" },
    { icon: "fa-solid fa-vault", label: "Single Treasury" },
    { icon: "fa-solid fa-fire", label: "Real-time Prices" },
    { icon: "fa-solid fa-lock-open", label: "Self-Custody" },
  ];

  function buildPills(items) {
    return [...items, ...items]
      .map(
        ({ icon, label }) =>
          `<span class="tech-pill"><i class="${icon}"></i> ${label}</span>`,
      )
      .join("");
  }

  row1.innerHTML = buildPills(stackRow1);
  row2.innerHTML = buildPills(stackRow2);
}

const year = document.querySelector(".year");
function getCurYear() {
  if (year) {
    const now = new Date();
    const currYear = now.getFullYear();

    year.textContent = currYear;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroCardSwap();
  initMarquee();
  getCurYear();
  initMobileNav();
  initNavActiveLink();
});
