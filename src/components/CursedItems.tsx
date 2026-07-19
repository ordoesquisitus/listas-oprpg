import cursedItemsData from '../data/cursed-items.json';

type CursedItem = {
  name: string;
  description: string;
  element: 'Sangue' | 'Morte' | 'Conhecimento' | 'Energia' | 'Medo';
};

const elementStyles: Record<CursedItem['element'], string> = {
  Sangue: 'bg-danger',
  Morte: 'bg-black',
  Conhecimento: 'bg-warning',
  Energia: 'bg-violet',
  Medo: 'bg-white text-dark',
};

const elementLabels: Record<CursedItem['element'], string> = {
  Sangue: 'SANGUE',
  Morte: 'MORTE',
  Conhecimento: 'CONHECIMENTO',
  Energia: 'ENERGIA',
  Medo: 'MEDO',
};

const ParanormalItems = () => {
  const cursedItems = cursedItemsData as CursedItem[];

  const groupedCursedItems = (
    Object.keys(elementStyles) as CursedItem['element'][]
  )
    .map(element => ({
      element,
      label: elementLabels[element],
      className: elementStyles[element],
      items: cursedItems
        .filter(item => item.element === element)
        .sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .filter(group => group.items.length > 0);

  return (
    <div className="mt-3">
      <h5>O Preço da Maldição</h5>
      <p>
        Uma vez que um agente aceite um item amaldiçoado, a distância física não
        é impeditivo para o preço da maldição. A influência negativa de um item
        amaldiçoado só pode ser encerrada após algum tempo afastado do item (ou
        seja, apenas entre missões).
      </p>
      <ul>
        <li>
          <span className="bg-danger">
            <strong>SANGUE</strong>
          </span>
          . Sempre que falha em um teste baseado em Força ou Vigor, para cada
          maldição de Sangue em seus itens, você perde 2 pontos de Sanidade.
        </li>
        <li>
          <span className="bg-black">
            <strong>MORTE</strong>
          </span>
          . Sempre que falha em um teste baseado em Presença, para cada maldição
          de Morte em seus itens, você perde 2 pontos de Sanidade.
        </li>
        <li>
          <span className="bg-warning">
            <strong>CONHECIMENTO</strong>
          </span>
          . Sempre que falha em um teste baseado em Intelecto, para cada
          maldição de Conhecimento em seus itens, você perde 2 pontos de
          Sanidade.
        </li>
        <li>
          <span className="bg-violet">
            <strong>ENERGIA</strong>
          </span>
          . Sempre que falha em um teste baseado em Agilidade, para cada
          maldição de Energia em seus itens, você perde 2 pontos de Sanidade.
        </li>
        <li>
          <span className="bg-white text-dark">
            <strong>MEDO</strong>
          </span>
          . Cada item possui um preço específico, determinado pelo Mestre, e que
          pode mudar de portador a portador.
        </li>
      </ul>
      <p className="fst-italic">
        *Exceto quando indicado o contrário, contam como itens de categoria II e
        ocupam 1 espaço.
      </p>
      {groupedCursedItems.map(group => (
        <section key={group.element} className="mb-4">
          <h6 className="mb-3">
            <span className={`px-1 py-1 fw-bold ${group.className}`}>
              {group.label}
            </span>
          </h6>
          <div className="row">
            {group.items.map(item => (
              <div key={item.name} className="col-lg-6 col-md-12 mb-3">
                <div className="card h-100 text-bg-dark text-light border-light">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <span
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ParanormalItems;
