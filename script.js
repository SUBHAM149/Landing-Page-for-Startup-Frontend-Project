/* ==========================
   Smooth Scroll Navigation
========================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

/* ==========================
   Sticky Navbar
========================== */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

/* ==========================
   Active Menu Highlight
========================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ==========================
   Scroll Reveal Animation
========================== */
const revealElements = document.querySelectorAll(
  ".feature, .about-img, .about-text, .card"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/* ==========================
   Animated Counters
========================== */
const counters = document.querySelectorAll(".price");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.innerText.replace("₹", "") || 1000;
    const count = +counter.dataset.count || 0;
    const increment = target / 80;

    if (count < target) {
      counter.dataset.count = Math.ceil(count + increment);
      counter.innerText = "₹" + counter.dataset.count;
      setTimeout(updateCount, 20);
    }
  };
  updateCount();
});

/* ==========================
   Pricing Card Hover Effect
========================== */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.08)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

/* ==========================
   Newsletter Email Validation
========================== */
function subscribe() {
  const email = document.getElementById("email").value;

  if (!email.includes("@")) {
    alert("Please enter a valid email!");
  } else {
    alert("Subscribed Successfully 🚀");
  }
}

/* ==========================
   Scroll To Top Button
========================== */
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
