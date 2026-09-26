// ==========================================================
// SHREE VAIDIK BHAKTI CENTER
// Main Website JavaScript
// ==========================================================
// ==========================================================
// ORGANIZATION INFORMATION
// Change organization contact information here only.
// It will automatically update across the website.
// ==========================================================

const organizationInfo = {
    email: "admin@shreevaidikbhakticenter.org",
    phone: "+1 (513) 341-5621",
    ein: "42-2581130",
    address: "6413 Katherine Manor Ct, Liberty Twp, OH 45011",
  };
  
  
  // Automatically display organization information
  document.querySelectorAll("[data-org-email]").forEach((element) => {
    element.textContent = organizationInfo.email;
  
    if (element.tagName === "A") {
      element.href = `mailto:${organizationInfo.email}`;
    }
  });
  
  document.querySelectorAll("[data-org-phone]").forEach((element) => {
    if (organizationInfo.phone) {
      element.textContent = organizationInfo.phone;
  
      if (element.tagName === "A") {
        element.href = `tel:${organizationInfo.phone.replace(/[^\d+]/g, "")}`;
      }
    } else {
      element.textContent = "Phone number coming soon";
    }
  });
  
  document.querySelectorAll("[data-org-location]").forEach((element) => {
    element.textContent = organizationInfo.location;
  });
  document.querySelectorAll("[data-org-ein]").forEach((element) => {
    element.textContent = organizationInfo.ein;
  });
  document.querySelectorAll("[data-org-address]").forEach((element) => {
    element.textContent = organizationInfo.address;
  });

// ----------------------------------------------------------
// Mobile Navigation
// ----------------------------------------------------------

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

  });


  // Close menu after clicking a navigation link
  const mobileLinks = mobileNav.querySelectorAll("a");

  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileNav.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });


  // Close mobile menu if browser becomes desktop size
  window.addEventListener("resize", () => {

    if (window.innerWidth > 1000) {

      mobileNav.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

    }

  });

}

// ==========================================================
// START NEW PAGES AT THE TOP
// ==========================================================

window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
  });

  // ==========================================================
// NAVBAR TRANSPARENCY ON SCROLL
// ==========================================================

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const updateHeader = () => {
    if (window.scrollY > 50) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", updateHeader);
  updateHeader();
}