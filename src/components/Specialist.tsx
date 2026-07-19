import specialistsPathsData from '../data/specialist_paths.json';
import specialistAbilitiesData from '../data/specialist-abilities.json';

const Specialist = () => {
  return (
    <div className="mt-3">
      <div className="accordion" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed text-bg-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Poderes de Especialista
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse text-bg-dark"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="row">
                {specialistAbilitiesData
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((ability, index) => (
                    <div key={index} className="col-lg-6 col-md-12 mb-3">
                      <div className="card h-100 text-bg-dark text-light border-light">
                        <div className="card-body">
                          <h5 className="card-title">{ability.name}</h5>
                          <span className="card-text">
                            {ability.description}{' '}
                            {ability.requirement && (
                              <>
                                <i>Pré-requisitos: </i>
                                {ability.requirement}
                              </>
                            )}
                          </span>
                          <br />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed text-bg-dark border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Trilhas de Especialista
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse text-bg-dark collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="row">
                {specialistsPathsData
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((path, index) => (
                    <div key={index} className="col-lg-6 col-md-12 mb-3">
                      <div className="card h-100 text-bg-dark text-light border-light">
                        <div className="card-body">
                          <h5 className="card-title">{path.name}</h5>
                          <p className="card-text">{path.description}</p>
                          {path.special && (
                            <p>
                              <strong>Especial: </strong>
                              {path.special}
                            </p>
                          )}
                          <p className="card-text">
                            <strong>10% - {path.nex10.name}. </strong>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: path.nex10.description,
                              }}
                            ></span>
                          </p>
                          <p className="card-text">
                            <strong>40% - {path.nex40.name}. </strong>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: path.nex40.description,
                              }}
                            ></span>
                          </p>
                          <p className="card-text">
                            <strong>65% - {path.nex65.name}. </strong>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: path.nex65.description,
                              }}
                            ></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
