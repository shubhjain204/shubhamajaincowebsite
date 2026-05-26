const WHATSAPP_NUMBER = "919999999999";
const FIRM_NAME = "Sharma & Associates";

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const service = link.dataset.service || "CA services";
  const message = `Hello ${FIRM_NAME}, I need help with ${service}. Please contact me.`;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
