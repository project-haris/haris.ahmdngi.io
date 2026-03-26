document$.subscribe(() => {
  let orb = document.querySelector(".floating-orb");

  if (!orb) {
    orb = document.createElement("div");
    orb.className = "floating-orb";
    orb.setAttribute("aria-hidden", "true");
    document.body.appendChild(orb);
  }

});
