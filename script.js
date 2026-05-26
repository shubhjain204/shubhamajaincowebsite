const WHATSAPP_NUMBER = "918005840433";
const FIRM_NAME = "Shubham A Jain & Co.";

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const service = link.dataset.service || "CA services";
  const message = `Hello ${FIRM_NAME}, I need help with ${service}. Please contact me.`;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
