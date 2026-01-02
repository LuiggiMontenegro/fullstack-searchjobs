import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Pagination } from "./components/Pagination";
import { JobListings } from "./components/JobListings";
import { SearchFormSection } from "./components/SearchFormSection";
import { useState } from "react";

import jobsData from "./data.json";

const RESULTS_PAGE = 4;

function App() {

  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState('');

  const [currentPage, setCurrentPage] = useState(1);


  const jobsFilteredByFilters = jobsData.filter( job => {
    return ( filters.technology === '' || job.data.technology.toLowerCase() === filters.technology.toLowerCase()) 
  })

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PAGE,
    currentPage * RESULTS_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    // console.log("Hola");
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    // console.log('TextFilter')

    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />

      <main>
        <SearchFormSection
          onSearch={handleSearch}
          onTextFilter={handleTextFilter}
        />

        <section>
          <JobListings jobs={pagedResults} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
