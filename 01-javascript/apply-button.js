const jobListingsSection = document.querySelector(".jobs-listings");

jobListingsSection?.addEventListener("click", function (event) {
  // Se usa optional Chaining en el caso de que no encuentre la clase .jobs-listings.
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    // console.log('Hola')
    const button = document.querySelectorAll(".button-apply-job");

    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disable = true;
  }
});