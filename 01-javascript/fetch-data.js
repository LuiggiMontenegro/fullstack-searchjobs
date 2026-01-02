export let allJobs = [];

const container = document.querySelector(".jobs-listings");

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((jobs) => {
    allJobs = jobs;
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";
      article.dataset.id = job.id;
      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = JSON.stringify(job.data.technology);

      
      article.innerHTML = `<div>
              <h3>${job.titulo}</h3>
              <small>${job.empresa} | ${job.ubicacion}</small>
              <p>
               ${job.descripcion}
              </p>
              </div>
              <button class="button-apply-job" id="main-btn">Aplicar</button>`
            

      container.appendChild(article);
    });
  });
