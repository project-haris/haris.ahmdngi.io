const ensureFooter = () => {
  const footerInner = document.querySelector(".md-footer-meta__inner");

  if (!footerInner) {
    return;
  }

  let copyright = footerInner.querySelector(".md-copyright");
  if (!copyright) {
    copyright = document.createElement("div");
    copyright.className = "md-copyright";
    footerInner.prepend(copyright);
  }

  copyright.innerHTML = `
    <span class="haris-footer-copy">
    Made with
    <a href="https://zensical.org/" target="_blank" rel="noopener">
      Zensical
    </a>
    </span>
  `;

  let social = footerInner.querySelector(".haris-footer-links");
  if (!social) {
    social = document.createElement("div");
    social.className = "haris-footer-links";
    footerInner.appendChild(social);
  }

  social.innerHTML = `
    <a href="https://notes.ahmdngi.io/" target="_blank" rel="noopener" class="haris-footer-link">Home</a>
    <a href="https://github.com/ahmdngi" target="_blank" rel="noopener" class="haris-footer-link">GitHub</a>
    <a href="https://www.linkedin.com/in/ahmdngi/" target="_blank" rel="noopener" class="haris-footer-link">LinkedIn</a>
    <a href="mailto:ahmdngi@hotmail.com" target="_blank" rel="noopener" class="haris-footer-link">Email</a>
  `;
};

document$.subscribe(() => {
  let orb = document.querySelector(".floating-orb");

  if (!orb) {
    orb = document.createElement("div");
    orb.className = "floating-orb";
    orb.setAttribute("aria-hidden", "true");
    document.body.appendChild(orb);
  }

  ensureFooter();
});
