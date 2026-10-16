document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }

  const grid = document.getElementById("project-grid");
  if (!grid || !Array.isArray(window.PORTFOLIO_PROJECTS)) return;

  const filters = document.querySelectorAll("[data-filter]");
  function renderProjects(filter = "todos") {
    const projects = window.PORTFOLIO_PROJECTS.filter(project =>
      filter === "todos" || (project.filters || [project.category]).includes(filter)
    );
    grid.innerHTML = "";
    if (!projects.length) {
      grid.innerHTML = '<p class="empty-project">Nenhum projeto nesta categoria ainda.</p>';
      return;
    }
    projects.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card";
      const artClass = project.artStyle || "green";
      const cover = project.image
        ? `<img src="${escapeAttr(project.image)}" alt="Captura de ${escapeAttr(project.title)}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0">`
        : "";
      card.innerHTML = `
        <a href="projeto.html?id=${encodeURIComponent(project.id)}" aria-label="Ver projeto ${escapeAttr(project.title)}">
          <div class="project-art ${artClass}${project.image ? " has-cover" : ""}">${cover}${project.image ? "" : `<span class="art-mark">${escapeHtml(project.art || "↗")}</span>`}<span class="art-type">${escapeHtml(project.categoryLabel || "PROJETO")}</span></div>
        </a>
        <div class="project-card-content">
          <div class="project-topline"><span>${escapeHtml(project.categoryLabel || "PROJETO")}</span></div>
          <div class="eyebrow"><span>${escapeHtml(project.semester)}</span></div>
          <h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.short)}</p>
          <div class="skill-list">${(project.technologies || []).slice(0, 4).map(tech => `<span>${escapeHtml(tech)}</span>`).join("")}</div>
          <a class="project-open" href="projeto.html?id=${encodeURIComponent(project.id)}"><span>Ver apresentação</span><span>↗</span></a>
        </div>`;
      grid.appendChild(card);
    });
  }
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("active", item === button));
    renderProjects(button.dataset.filter);
  }));
  renderProjects();
});

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function escapeAttr(value) { return escapeHtml(value); }