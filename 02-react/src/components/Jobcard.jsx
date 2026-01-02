import React from "react";
import { useState } from "react";


export const Jobcard = ({ job }) => {
  const [isApplied, setIsApplied] = useState(false);
  
  const buttonText = isApplied ? 'Aplicado' : 'Aplicar'
  const buttonClasses = isApplied ? 'button-apply-job is-applied' : 'button-apply-job'

  function handleClick() {
    setIsApplied(true);
  }

  return (
    <article
      className="job-listing-card"
      data-modalidad={job.data?.modalidad}
      data-nivel={job.data?.nivel}
      data-technology={job.data?.technology}
    >
      <div>
        <h3>{job.titulo}</h3>
        <small>
          {job.empresa} | {job.ubicacion}
        </small>
        <p>{job.descripcion}</p>
      </div>
      <button
        className={buttonClasses}
        onClick={handleClick}
      >{buttonText}</button>
    </article>
  );
};
