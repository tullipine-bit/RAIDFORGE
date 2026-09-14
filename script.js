// =========================
// MENU MOBILE
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}


// =========================
// RECHERCHE
// =========================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");

const tools = [
  {
    name: "Raids",
    keywords: ["raid", "boss", "pve"],
    url: "pages/raids.html"
  },
  {
    name: "Gym Rerun",
    keywords: ["gym", "rerun", "champion"],
    url: "pages/gym-rerun.html"
  },
  {
    name: "Events",
    keywords: ["event", "événement", "calendrier"],
    url: "pages/events.html"
  },
  {
    name: "Farming",
    keywords: ["farming", "argent", "farm", "gains"],
    url: "pages/farming.html"
  },
  {
    name: "Pokédex",
    keywords: ["pokedex", "pokemon", "pokémon"],
    url: "pages/pokedex.html"
  },
  {
    name: "Guides",
    keywords: ["guide", "astuce", "aide"],
    url: "pages/guides.html"
  }
];

function performSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    searchMessage.textContent = "Écris un terme à rechercher.";
    return;
  }

  const result = tools.find(tool => {
    return (
      tool.name.toLowerCase().includes(query) ||
      tool.keywords.some(keyword => keyword.includes(query))
    );
  });

  if (result) {
    searchMessage.textContent = `Résultat trouvé : ${result.name}`;
    window.location.href = result.url;
  } else {
    searchMessage.textContent =
      "Aucun résultat trouvé. Essaie un autre terme.";
  }
}

if (searchButton) {
  searchButton.addEventListener("click", performSearch);
}

if (searchInput) {
  searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      performSearch();
    }
  });
}