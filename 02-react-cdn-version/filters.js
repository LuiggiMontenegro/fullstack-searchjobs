import { allJobs } from "./fetch-data.js";

const filterTech = document.querySelector("#filter-technology");
const filterLoc = document.querySelector("#filter-location");
const filterLevel = document.querySelector("#filter-experience-level");

function getJobs() {
  return document.querySelectorAll(".job-listing-card");
}

function applyFilters() {
  const tech = filterTech.value;
  const loc = filterLoc.value; // cdmx
  const level = filterLevel.value;

  getJobs().forEach((job) => {
    let jobTech = JSON.parse(job.dataset.technology ?? "[]");
    if (!Array.isArray(jobTech)) jobTech = [jobTech];
    const jobLoc = job.dataset.modalidad ?? "";
    const jobLevel = job.dataset.nivel ?? "";

    const matchTech = !tech || jobTech.includes(tech);
    const matchLoc = !loc || jobLoc === loc;
    const matchLevel = !level || jobLevel === level;

    const shouldShow = matchTech && matchLoc && matchLevel;
    job.classList.toggle("is-hidden", shouldShow === false);
  });
}

[filterTech, filterLoc, filterLevel].forEach((el) => {
  el.addEventListener("change", applyFilters);
});

// Input

const searchInput = document.querySelector("#empleos-search-input");
const searchForm = document.querySelector("#empleos-search-form");

searchInput.addEventListener("input", (e) => {
  const inputValue = (e.target.value || "").trim().toLowerCase();
  // console.log(inputValue)

  const matches = allJobs.filter((job) => {
    const title = (job.titulo || "").toLowerCase();
    const company = (job.empresa || "").toLowerCase();
    const jobType = (job.data.modalidad || "").toLowerCase();
    const description = (job.descripcion || "").toLowerCase();

    return (
      title.includes(inputValue) ||
      company.includes(inputValue) ||
      jobType.includes(inputValue) ||
      description.includes(inputValue) 
    );
  });

  const matchIds = new Set(matches.map((j) => j.id));

  getJobs().forEach((job) => {
    const isMatch = matchIds.has(job.dataset.id);
    job.classList.toggle("is-hidden", !isMatch);
  });
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
