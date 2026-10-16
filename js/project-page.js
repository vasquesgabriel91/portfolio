document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = (window.PORTFOLIO_PROJECTS || []).find(item => item.id === id);
  const root = document.getElementById("project-detail");
  if (!project) {
    document.title = "Projeto não encontrado | Portfólio";
    root.innerHTML = '<a class="back-link" href="index.html#projetos">← Voltar para o portfólio</a><h1>Projeto não encontrado</h1><p class="detail-lead">Esse projeto não está cadastrado. Volte à página principal e escolha outro cartão.</p>';
    return;
  }
  document.title = `${project.title} | Gabriel Vasques de Abreu`;
  const putText = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value || ""; };
  putText("#project-category", project.categoryLabel || "PROJETO");
  putText("#project-title", project.title);
  putText("#project-summary", project.short);
  const links = document.getElementById("project-links");
  links.innerHTML = "";
  if (project.github) links.insertAdjacentHTML("beforeend", `<a class="primary-link" href="${safeUrl(project.github)}" target="_blank" rel="noreferrer">Ver código-fonte no GitHub ↗</a>`);
  if (project.live) links.insertAdjacentHTML("beforeend", `<a href="${safeUrl(project.live)}" target="_blank" rel="noreferrer">Abrir projeto publicado ↗</a>`);
  if (!project.github && !project.live) links.innerHTML = '<span class="muted-note">Adicione o link do repositório e/ou da aplicação publicada em js/projects.js.</span>';

  const cover = document.getElementById("project-cover");
  if (project.image) cover.innerHTML = `<img src="${safeUrl(project.image)}" alt="Imagem de apresentação de ${escapeHtml(project.title)}">`;
  document.getElementById("project-description").innerHTML = (project.description || []).map(p => `<p>${escapeHtml(p)}</p>`).join("");
  document.getElementById("project-contribution").innerHTML = (project.contribution || []).map(p => `<p>${escapeHtml(p)}</p>`).join("");
  document.getElementById("project-tech").innerHTML = (project.technologies || []).map(tech => `<span>${escapeHtml(tech)}</span>`).join("");
  const videoSection = document.getElementById("project-video-section");
  const videoBox = document.getElementById("project-video");
  const media = resolveVideo(project.video);
  if (media && videoSection && videoBox) {
    if (media.type === "file") {
      videoBox.innerHTML = `<video controls preload="metadata" playsinline${project.image ? ` poster="${safeUrl(project.image)}"` : ""} title="Vídeo de ${escapeHtml(project.title)}"><source src="${media.url}" type="${media.mime}">Seu navegador não suporta vídeo HTML5.</video>`;
    } else if (media.type === "youtube") {
      videoBox.innerHTML = `<iframe class="yt" src="${media.url}" title="Vídeo de ${escapeHtml(project.title)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
      videoBox.innerHTML = `<iframe src="${media.url}" height="399" width="504" frameborder="0" allowfullscreen title="Vídeo de ${escapeHtml(project.title)}"></iframe>`;
    }
    videoSection.hidden = false;
    document.getElementById("screenshots-eyebrow").textContent = "05 / NA PRÁTICA";
  }
  const screenshots = document.getElementById("project-screenshots");
  if (project.screenshots && project.screenshots.length) {
    document.getElementById("screenshots-text").textContent = "Telas do sistema em funcionamento.";
    screenshots.innerHTML = project.screenshots.map((src, i) => `<div class="screenshot-card"><img src="${safeUrl(src)}" alt="Captura ${i + 1} de ${escapeHtml(project.title)}"></div>`).join("");
  } else {
    screenshots.innerHTML = '<div class="screenshot-card"><span>SCREENSHOT 01 — ADICIONE SUA IMAGEM</span></div><div class="screenshot-card"><span>SCREENSHOT 02 — ADICIONE SUA IMAGEM</span></div>';
  }
});
function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
function safeUrl(value) {
  try { const url = new URL(value, window.location.href); return ["http:", "https:", "file:"].includes(url.protocol) ? url.href : "#"; }
  catch { return "#"; }
}
const VIDEO_MIME = { mp4: "video/mp4", webm: "video/webm", ogg: "video/ogg", mov: "video/mp4" };
function resolveVideo(value) {
  if (!value) return null;
  try {
    const url = new URL(value, window.location.href);
    // Embed do LinkedIn (online)
    if (url.protocol === "https:" && url.hostname === "www.linkedin.com" && url.pathname.startsWith("/embed/")) {
      return { type: "embed", url: url.href };
    }
    // YouTube: aceita embed, watch?v= e youtu.be
    const host = url.hostname.replace(/^www\./, "");
    let ytId = "";
    if (host === "youtu.be") ytId = url.pathname.slice(1);
    else if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (url.pathname.startsWith("/embed/")) ytId = url.pathname.split("/")[2];
      else if (url.pathname === "/watch") ytId = url.searchParams.get("v") || "";
    }
    if (/^[\w-]{11}$/.test(ytId)) {
      return { type: "youtube", url: `https://www.youtube.com/embed/${ytId}` };
    }
    // Arquivo local (assets/video/...) ou link direto para .mp4/.webm/.ogg
    const ext = url.pathname.split(".").pop().toLowerCase();
    if (VIDEO_MIME[ext] && ["http:", "https:", "file:"].includes(url.protocol)) {
      return { type: "file", url: url.href, mime: VIDEO_MIME[ext] };
    }
  } catch {}
  return null;
}
