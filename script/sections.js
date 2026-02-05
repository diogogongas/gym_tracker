const filterLinks = document.querySelectorAll(".auth a");
const cards = document.querySelectorAll(".card");

filterLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const selectedSection = link.dataset.filter;

    cards.forEach(card => {
      const cardSection = card.querySelector(".open-modal").dataset.section;

      if (selectedSection === "Todos" || cardSection === selectedSection) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
