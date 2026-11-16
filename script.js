const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isExpanded);
});

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("is-open");
}

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeNavigation();
    menuToggle.focus();
  }
});

const filters = Array.from(document.querySelectorAll(".filter-button"));
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const emptyMessage = document.querySelector(".filter-empty");
const caseStudy = document.querySelector(".case-study");
const caseTabs = Array.from(document.querySelectorAll(".case-study-tab"));
const casePanels = Array.from(document.querySelectorAll(".case-study-panel"));

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    let visibleCount = 0;

    filters.forEach((button) => {
      const active = button === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    projectCards.forEach((card) => {
      const visible = category === "all" || card.dataset.category === category;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    caseStudy.hidden = category !== "all" && category !== caseStudy.dataset.category;
    emptyMessage.hidden = visibleCount > 0 || !caseStudy.hidden;
    updateWorkProgress();
  });
});

const zones = Array.from(document.querySelectorAll("[data-zone]"));
const zoneLabel = document.querySelector(".zone-label");
const zoneNumber = document.querySelector(".zone-number");
const workSection = document.querySelector("#work");
const handoffFill = document.querySelector(".handoff-rail i");
let zoneUpdateRequested = false;

function updateWorkProgress() {
  const sectionBounds = workSection.getBoundingClientRect();
  const scrollDistance = window.innerHeight + sectionBounds.height;
  const progress = Math.min(
    1,
    Math.max(0, (window.innerHeight - sectionBounds.top) / scrollDistance)
  );

  handoffFill.style.transform = `scaleX(${progress})`;
}

function activateCaseTab(selectedIndex, moveFocus = false) {
  caseTabs.forEach((tab, index) => {
    const selected = index === selectedIndex;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    tab.classList.toggle("is-active", selected);
    casePanels[index].hidden = !selected;
  });

  if (moveFocus) caseTabs[selectedIndex].focus();
  updateWorkProgress();
}

document.querySelector(".case-study-tabs").hidden = false;
activateCaseTab(0);

caseTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateCaseTab(index));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % caseTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + caseTabs.length) % caseTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = caseTabs.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    activateCaseTab(nextIndex, true);
  });
});

function updateActiveZone() {
  const focusLine = window.innerHeight * 0.48;
  const activeZone = zones.reduce(
    (active, section) =>
      section.getBoundingClientRect().top <= focusLine ? section : active,
    zones[0]
  );
  const zoneIndex = zones.indexOf(activeZone);

  zoneLabel.textContent = activeZone.dataset.zone.toUpperCase();
  zoneNumber.textContent = `${String(zoneIndex + 1).padStart(2, "0")} / ${String(zones.length).padStart(2, "0")}`;
  updateWorkProgress();
  zoneUpdateRequested = false;
}

function requestZoneUpdate() {
  if (zoneUpdateRequested) return;
  zoneUpdateRequested = true;
  window.requestAnimationFrame(updateActiveZone);
}

window.addEventListener("scroll", requestZoneUpdate, { passive: true });
window.addEventListener("resize", requestZoneUpdate);
updateActiveZone();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".project-card, .approach-panel, .experience-item, .stack-card").forEach((element) => {
    element.classList.add("reveal-ready");
    revealObserver.observe(element);
  });
  document.documentElement.classList.add("has-motion");
}

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

async function showBootSequence() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bootScreen = document.querySelector("#boot-screen");
  const bootProgress = bootScreen.querySelector(".boot-progress");
  const bootStatus = bootScreen.querySelector("[data-boot-status]");
  const bootPercent = bootScreen.querySelector("[data-boot-percent]");
  const startedAt = performance.now();

  function setProgress(value, message) {
    bootProgress.style.width = `${value}%`;
    bootPercent.textContent = `${String(value).padStart(2, "0")}%`;
    bootStatus.textContent = message;
  }

  bootScreen.hidden = false;
  setProgress(18, "Preparing the interface");
  await new Promise((resolve) => window.setTimeout(resolve, 70));
  setProgress(54, "Loading product visuals");

  const heroImage = document.querySelector(".hero-image img");
  const imageReady = heroImage.complete
    ? Promise.resolve()
    : new Promise((resolve) => {
        const handleImageResult = () => {
          heroImage.removeEventListener("load", handleImageResult);
          heroImage.removeEventListener("error", handleImageResult);
          resolve();
        };
        heroImage.addEventListener("load", handleImageResult, { once: true });
        heroImage.addEventListener("error", handleImageResult, { once: true });
      });
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

  setProgress(82, "Finishing your workspace");
  await Promise.race([
    Promise.all([imageReady, fontsReady]),
    new Promise((resolve) => window.setTimeout(resolve, 1600)),
  ]);
  await new Promise((resolve) =>
    window.setTimeout(resolve, Math.max(0, 620 - (performance.now() - startedAt)))
  );

  setProgress(100, "Workspace ready");
  bootScreen.classList.add("is-leaving");
  window.setTimeout(() => {
    bootScreen.hidden = true;
    bootScreen.classList.remove("is-leaving");
  }, 400);
}

showBootSequence();
