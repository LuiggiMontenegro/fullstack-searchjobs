
import {Jobcard} from './Jobcard.jsx'

export function JobListings({jobs}) {
  return (
    <>
      <h2>Resultados de búsqueda</h2>
      <div className="jobs-listings">
        {jobs.map( job => (
          <Jobcard key={job.id} job={job} />
          
        ))}
      </div>
    </>
  );
}