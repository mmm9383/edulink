document.addEventListener("DOMContentLoaded", () => {
  setupFaq();
  duplicateServiceItems();
});

function setupFaq() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const trigger = item.querySelector(".faq-item__trigger");
    const iconContainer = item.querySelector(".faq-item__icon");
    const iconImg = iconContainer?.querySelector("img");
    const content = item.querySelector(".faq-item__content");

    if (item.classList.contains("open")) {
      content.style.maxHeight = `${content.scrollHeight}px`;
      if (iconImg) iconImg.src = "./assets/icons/Icon (21).svg";
    } else {
      if (iconImg) iconImg.src = "./assets/icons/Icon (22).svg";
    }

    trigger?.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");

      // Switch icon based on state
      if (iconImg) {
        iconImg.src = isOpen
          ? "./assets/icons/Icon (21).svg"  // opened (angel up)
          : "./assets/icons/Icon (22).svg"; // closed (angel down)
      }

      content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : null;
    });
  });
}

function duplicateServiceItems() {
  const scrollers = document.querySelectorAll("[data-auto-scroll]");
  scrollers.forEach((scroller) => {
    const track = scroller.querySelector(".services__track");
    if (!track) return;
    const items = track.innerHTML.trim();
    track.insertAdjacentHTML("beforeend", items);
  });
}





