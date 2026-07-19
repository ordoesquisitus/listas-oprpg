import originsData from '../data/origins.json';

const Origins = () => {
  return (
    <div className="mt-3">
      <div className="row">
        {originsData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((origin, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-3">
              <div className="card h-100 text-bg-dark text-light border-light">
                <div className="card-body">
                  <h5 className="card-title">{origin.name}</h5>
                  <span className="card-text">{origin.description}</span>
                  <br />
                  <span className="card-text">
                    <strong className="text-uppercase">
                      Perícias Treinadas.
                    </strong>{' '}
                    {origin.trainedSkills}
                  </span>
                  <br />
                  <span className="card-text">
                    <strong className="text-uppercase">
                      {origin.abilityName}.
                    </strong>{' '}
                    {origin.abilityDescription}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Origins;
