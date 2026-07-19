import accessoriesData from '../data/accessories.json';
import modificationsData from '../data/accessory-modifications.json';

type Modification = {
  name: string;
  effect: string;
  description: string;
};

type Accessory = {
  name: string;
  description: string;
  tier: string;
  weight: number;
};

const Accessories = () => {
  const accessories = accessoriesData as Accessory[];
  const modifications = modificationsData as Modification[];

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
              Acessórios
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse text-bg-dark"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="table-responsive">
                <table className="table table-sm align-middle">
                  <thead className="table-dark">
                    <tr className="text-uppercase">
                      <th scope="col">Nome</th>
                      <th scope="col" className="text-center">
                        Categoria
                      </th>
                      <th scope="col" className="text-center">
                        Espaços
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-dark">
                    <tr className="border-top border-white">
                      <td colSpan={4} className="p-0"></td>
                    </tr>
                    {accessories
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((accessory, index) => (
                        <tr key={index}>
                          <td>{accessory.name}</td>
                          <td className="text-center">{accessory.tier}</td>
                          <td className="text-center">{accessory.weight}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                {accessories
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((accessory, index) => (
                    <div key={index} className="col-lg-6 col-md-12 mb-3">
                      <div className="card h-100 text-bg-dark text-light border-light">
                        <div className="card-body">
                          <h5 className="card-title">{accessory.name}</h5>
                          <span
                            className="card-text"
                            dangerouslySetInnerHTML={{
                              __html: accessory.description,
                            }}
                          ></span>
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
              Modificações para Acessórios
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse text-bg-dark collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="table-responsive">
                <table className="table table-sm align-middle">
                  <thead className="table-dark">
                    <tr className="text-uppercase">
                      <th scope="col">Modificação</th>
                      <th scope="col">Efeito</th>
                    </tr>
                  </thead>
                  <tbody className="table-dark">
                    <tr className="border-top border-white">
                      <td colSpan={3} className="p-0"></td>
                    </tr>
                    {modifications
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((mod, index) => (
                        <tr key={index}>
                          <td>{mod.name}</td>
                          <td
                            dangerouslySetInnerHTML={{ __html: mod.effect }}
                          ></td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className="row">
                {modifications
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((mod, index) => (
                    <div key={index} className="col-lg-6 col-md-12 mb-3">
                      <div className="card h-100 text-bg-dark text-light border-light">
                        <div className="card-body">
                          <h5 className="card-title">{mod.name}</h5>
                          <p
                            className="card-text"
                            dangerouslySetInnerHTML={{
                              __html: mod.description,
                            }}
                          ></p>
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

export default Accessories;
