/* =========================================
   THE NEWSPAPER ROOM
========================================= */

/* =========================================
   PAGE DATA
========================================= */

const pages = [
  {
    id: 0,
    title: "Front Page",
    shortTitle: "FRONT PAGE",
  },
  {
    id: 1,
    title: "Tech & Culture",
    shortTitle: "TECH & CULTURE",
  },
  {
    id: 2,
    title: "Features",
    shortTitle: "FEATURES",
  },
];

let currentPage = 0;

/* =========================================
   ELEMENTS
========================================= */

const newspaper = document.getElementById("newspaper");

const paperPages = document.querySelectorAll(".paper-page");

const editorPages = document.querySelectorAll(".editor-page");

const pageButtons = document.querySelectorAll(".page-btn");

const miniPages = document.querySelectorAll(".mini-page");

const editorPageTitle = document.getElementById("editorPageTitle");

const paperFooterPage = document.getElementById("paperFooterPage");

const prevPage = document.getElementById("prevPage");

const nextPage = document.getElementById("nextPage");

/* =========================================
   PAGE SWITCHING
========================================= */

function switchPage(pageIndex) {
  currentPage = pageIndex;

  /* -----------------------------------------
     Newspaper pages
  ----------------------------------------- */

  paperPages.forEach((page, index) => {
    page.classList.toggle("active-page", index === currentPage);
  });

  /* -----------------------------------------
     Editor pages
  ----------------------------------------- */

  editorPages.forEach((page, index) => {
    page.classList.toggle("active", index === currentPage);
  });

  /* -----------------------------------------
     Sidebar page buttons
  ----------------------------------------- */

  pageButtons.forEach((button, index) => {
    button.classList.toggle("active", index === currentPage);
  });

  /* -----------------------------------------
     Mini page buttons
  ----------------------------------------- */

  miniPages.forEach((button, index) => {
    button.classList.toggle("active", index === currentPage);
  });

  /* -----------------------------------------
     Editor title
  ----------------------------------------- */

  editorPageTitle.textContent = pages[currentPage].title;

  /* -----------------------------------------
     Footer
  ----------------------------------------- */

  paperFooterPage.textContent = String(currentPage + 1).padStart(2, "0");

  /* -----------------------------------------
     Scroll newspaper back to top
  ----------------------------------------- */

  document.querySelector(".newspaper-wrapper").scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* =========================================
   PAGE BUTTONS
========================================= */

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageIndex = Number(button.dataset.page);

    switchPage(pageIndex);
  });
});

miniPages.forEach((button) => {
  button.addEventListener("click", () => {
    const pageIndex = Number(button.dataset.page);

    switchPage(pageIndex);
  });
});

/* =========================================
   PREVIOUS / NEXT
========================================= */

prevPage.addEventListener("click", () => {
  if (currentPage > 0) {
    switchPage(currentPage - 1);
  }
});

nextPage.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    switchPage(currentPage + 1);
  }
});

/* =========================================
   LIVE FRONT PAGE EDITING
========================================= */

const headlineInput = document.getElementById("headlineInput");

const subheadlineInput = document.getElementById("subheadlineInput");

const articleInput = document.getElementById("articleInput");

const sidebarInput = document.getElementById("sidebarInput");

const quoteInput = document.getElementById("quoteInput");

const mastheadInput = document.getElementById("mastheadInput");

const dateInput = document.getElementById("dateInput");

const previewHeadline = document.getElementById("previewHeadline");

const previewSubheadline = document.getElementById("previewSubheadline");

const previewArticle = document.getElementById("previewArticle");

const previewSidebar = document.getElementById("previewSidebar");

const previewQuote = document.getElementById("previewQuote");

/* =========================================
   LIVE UPDATE FUNCTION
========================================= */

function connectInput(input, preview) {
  input.addEventListener("input", () => {
    preview.textContent = input.value;
  });
}

connectInput(headlineInput, previewHeadline);

connectInput(subheadlineInput, previewSubheadline);

connectInput(articleInput, previewArticle);

connectInput(sidebarInput, previewSidebar);

connectInput(quoteInput, previewQuote);

connectInput(mastheadInput, document.querySelector(".masthead"));

connectInput(dateInput, document.querySelector(".paper-date"));

/* =========================================
   TEMPLATES
========================================= */

const templates = document.querySelectorAll(".template");

const templateData = {
  daily: {
    masthead: "THE DAILY BYTE",

    headline: "THE WEB IS BECOMING A PLACE TO CREATE AGAIN",

    subheadline:
      "A new generation of designers and developers are rebuilding the internet around creativity, personality and experimentation.",

    article:
      "The internet has always been more than a collection of websites. It is a place where ideas become visible, communities form and creative experiments find an audience.",

    sidebar: "SMALL WEBSITES ARE HAVING A BIG MOMENT",

    quote: "“Make something worth clicking on.”",
  },

  midnight: {
    masthead: "THE MIDNIGHT",

    headline: "THE INTERNET AFTER DARK",

    subheadline:
      "An exploration of digital spaces, strange websites and the people who build them.",

    article:
      "After midnight, the internet feels different. The feeds slow down, the noise becomes quieter and forgotten corners of the web begin to feel visible again.",

    sidebar: "THE STRANGE BEAUTY OF THE OLD WEB",

    quote:
      "“Somewhere online, there is still a little corner that belongs entirely to you.”",
  },

  archive: {
    masthead: "THE ARCHIVE",

    headline: "WHAT WE LEAVE BEHIND ONLINE",

    subheadline:
      "Personal websites, forgotten interfaces and digital artefacts from another internet.",

    article:
      "Digital history is often hidden in places that were never intended to become archives. Old websites, screenshots, forums and personal pages preserve fragments of how people once experienced the web.",

    sidebar: "DIGITAL HISTORY IS EVERYWHERE",

    quote:
      "“Every interface tells us something about the time that created it.”",
  },

  culture: {
    masthead: "CULTURE PAPER",

    headline: "DESIGNING FOR PERSONALITY",

    subheadline:
      "Why creators are moving away from generic interfaces and towards visual identities with a point of view.",

    article:
      "A website can communicate more than information. Colour, type, motion and layout can create an atmosphere before a visitor has read a single sentence.",

    sidebar: "THE ERA OF GENERIC DESIGN MAY BE ENDING",

    quote: "“Make it recognisable before you make it perfect.”",
  },

  weekly: {
    masthead: "THE WEEKLY",

    headline: "THE SMALL INTERNET IS GETTING BIGGER",

    subheadline:
      "Independent creators are building their own spaces, communities and publications online.",

    article:
      "The independent web has always existed, but a growing number of creators are rediscovering the freedom of building outside large platforms.",

    sidebar: "WHY THE PERSONAL WEB STILL MATTERS",

    quote:
      "“The internet is more interesting when everyone gets to decorate their own room.”",
  },
};

templates.forEach((template) => {
  template.addEventListener("click", () => {
    templates.forEach((item) => {
      item.classList.remove("active");
    });

    template.classList.add("active");

    const name = template.dataset.template;

    const data = templateData[name];

    if (!data) return;

    mastheadInput.value = data.masthead;

    headlineInput.value = data.headline;

    subheadlineInput.value = data.subheadline;

    articleInput.value = data.article;

    sidebarInput.value = data.sidebar;

    quoteInput.value = data.quote;

    previewHeadline.textContent = data.headline;

    previewSubheadline.textContent = data.subheadline;

    previewArticle.textContent = data.article;

    previewSidebar.textContent = data.sidebar;

    previewQuote.textContent = data.quote;

    document.querySelector(".masthead").textContent = data.masthead;
  });
});

/* =========================================
   TYPOGRAPHY
========================================= */

const typeButtons = document.querySelectorAll(".option-btn");

typeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    typeButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    newspaper.classList.remove(
      "type-classic",
      "type-modern",
      "type-editorial",
      "type-mono",
    );

    newspaper.classList.add(`type-${button.dataset.type}`);
  });
});

/* =========================================
   PAPER COLORS
========================================= */

const paperButtons = document.querySelectorAll(".paper-btn");

paperButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paperButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    newspaper.classList.remove("paper-warm", "paper-grey", "paper-black");

    const paper = button.dataset.paper;

    if (paper !== "white") {
      newspaper.classList.add(`paper-${paper}`);
    }
  });
});

/* =========================================
   SAVE
========================================= */

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  const edition = {
    masthead: mastheadInput.value,

    date: dateInput.value,

    headline: headlineInput.value,

    subheadline: subheadlineInput.value,

    article: articleInput.value,

    sidebar: sidebarInput.value,

    quote: quoteInput.value,

    page: currentPage,
  };

  localStorage.setItem("newspaperRoomEdition", JSON.stringify(edition));

  saveBtn.textContent = "SAVED ✓";

  setTimeout(() => {
    saveBtn.textContent = "SAVE";
  }, 1600);
});

/* =========================================
   LOAD SAVED EDITION
========================================= */

function loadEdition() {
  const saved = localStorage.getItem("newspaperRoomEdition");

  if (!saved) return;

  try {
    const edition = JSON.parse(saved);

    mastheadInput.value = edition.masthead;

    dateInput.value = edition.date;

    headlineInput.value = edition.headline;

    subheadlineInput.value = edition.subheadline;

    articleInput.value = edition.article;

    sidebarInput.value = edition.sidebar;

    quoteInput.value = edition.quote;

    document.querySelector(".masthead").textContent = edition.masthead;

    document.querySelector(".paper-date").textContent = edition.date;

    previewHeadline.textContent = edition.headline;

    previewSubheadline.textContent = edition.subheadline;

    previewArticle.textContent = edition.article;

    previewSidebar.textContent = edition.sidebar;

    previewQuote.textContent = edition.quote;

    if (typeof edition.page === "number") {
      switchPage(edition.page);
    }
  } catch (error) {
    console.log("Could not load saved edition.");
  }
}

/* =========================================
   NEW EDITION
========================================= */

const newEditionBtn = document.getElementById("newEditionBtn");

newEditionBtn.addEventListener("click", () => {
  const confirmed = confirm(
    "Start a new edition? Your current saved edition will remain in storage.",
  );

  if (!confirmed) return;

  mastheadInput.value = "THE DAILY BYTE";

  dateInput.value = "MONDAY · 28 SEPTEMBER 2026";

  headlineInput.value = templateData.daily.headline;

  subheadlineInput.value = templateData.daily.subheadline;

  articleInput.value = templateData.daily.article;

  sidebarInput.value = templateData.daily.sidebar;

  quoteInput.value = templateData.daily.quote;

  document.querySelector(".masthead").textContent = "THE DAILY BYTE";

  document.querySelector(".paper-date").textContent =
    "MONDAY · 28 SEPTEMBER 2026";

  previewHeadline.textContent = templateData.daily.headline;

  previewSubheadline.textContent = templateData.daily.subheadline;

  previewArticle.textContent = templateData.daily.article;

  previewSidebar.textContent = templateData.daily.sidebar;

  previewQuote.textContent = templateData.daily.quote;

  switchPage(0);
});

/* =========================================
   EXPORT CURRENT PAGE AS PNG
========================================= */

const exportBtn =
  document.getElementById("exportBtn");


exportBtn.addEventListener("click", async () => {

  exportBtn.textContent = "EXPORTING...";

  try {

    const canvas = await html2canvas(
      newspaper,
      {
        scale: 2,
        backgroundColor: null,
        useCORS: true,

        // Makes sure the complete newspaper
        // is captured even if the workspace
        // itself is scrollable.
        width: newspaper.scrollWidth,
        height: newspaper.scrollHeight
      }
    );


    const image =
      canvas.toDataURL("image/png");


    const link =
      document.createElement("a");


    link.href = image;

    link.download =
      `newspaper-page-${String(currentPage + 1).padStart(2, "0")}.png`;


    link.click();


    exportBtn.textContent = "EXPORTED ✓";


    setTimeout(() => {

      exportBtn.textContent = "EXPORT";

    }, 1800);


  } catch (error) {

    console.error(
      "Could not export newspaper:",
      error
    );

    exportBtn.textContent = "ERROR";

    setTimeout(() => {

      exportBtn.textContent = "EXPORT";

    }, 1800);

  }

});
/* =========================================
   INITIALISE
========================================= */

switchPage(0);

loadEdition();
