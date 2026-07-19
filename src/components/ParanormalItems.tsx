import paranormalItemsData from '../data/paranormal-items.json';

type ParanormalItem = {
  name: string;
  description: string;
  tier: string;
  weight: number;
};

const ParanormalItems = () => {
  const paranormalItems = paranormalItemsData as ParanormalItem[];

  return (
    <div className="mt-3">
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
            {paranormalItems
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="text-center">{item.tier}</td>
                  <td className="text-center">{item.weight}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        {paranormalItems
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-3">
              <div className="card h-100 text-bg-dark text-light border-light">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <span
                    className="card-text"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  ></span>
                  <br />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParanormalItems;
