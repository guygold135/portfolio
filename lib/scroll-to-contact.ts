export function scrollToContact(smooth = true) {
  document.getElementById("contact")?.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    block: "start",
  })
}
